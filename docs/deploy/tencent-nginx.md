# 腾讯云服务器 Nginx 部署指南

这个项目是 Vite + React 构建的静态网站。正式部署时只需要把 `dist/` 目录交给 Nginx 托管，不需要在服务器上长期运行 `npm run dev`、PM2、Node 后端或数据库。

## 你需要准备的信息

把下面几个值替换成你自己的：

```text
服务器公网 IP：YOUR_SERVER_IP
SSH 用户名：root 或 ubuntu
域名：example.com
站点目录：/var/www/ai-portfolio
```

如果你暂时没有域名，可以先用服务器公网 IP 访问。等域名备案、解析完成后，再把 Nginx 的 `server_name` 改成域名。

## 1. 本地构建项目

在 Windows PowerShell 里进入项目目录：

```powershell
cd "C:\Users\Administrator\Documents\个人网站"
```

安装依赖：

```powershell
npm install
```

构建生产版本：

```powershell
npm run build
```

成功后会生成：

```text
C:\Users\Administrator\Documents\个人网站\dist
```

这个 `dist/` 就是要上传到服务器的静态文件。

## 2. 登录腾讯云服务器

在 Windows PowerShell 里执行：

```powershell
ssh root@YOUR_SERVER_IP
```

如果你的服务器不是 `root` 用户，例如 Ubuntu 镜像常见用户名是 `ubuntu`，就用：

```powershell
ssh ubuntu@YOUR_SERVER_IP
```

如果使用密钥登录：

```powershell
ssh -i "C:\path\to\your-key.pem" root@YOUR_SERVER_IP
```

## 3. 在服务器安装 Nginx

Ubuntu / Debian / TencentOS Server Debian 系：

```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

CentOS / TencentOS Server / RHEL 系：

```bash
sudo yum install -y nginx
sudo systemctl enable --now nginx
```

确认 Nginx 正在运行：

```bash
sudo systemctl status nginx
```

看到 `active (running)` 就是正常。

## 4. 创建网站目录

仍然在服务器里执行：

```bash
sudo mkdir -p /var/www/ai-portfolio/dist
sudo chown -R $USER:$USER /var/www/ai-portfolio
```

如果你用 `root` 登录，`chown` 这一步影响不大；如果你用普通用户登录，这一步能让后续上传更顺。

## 5. 上传 dist 文件

退出服务器，回到本地 Windows PowerShell：

```bash
exit
```

上传构建产物：

```powershell
scp -r "C:\Users\Administrator\Documents\个人网站\dist\*" root@YOUR_SERVER_IP:/var/www/ai-portfolio/dist/
```

如果你的 SSH 用户是 `ubuntu`：

```powershell
scp -r "C:\Users\Administrator\Documents\个人网站\dist\*" ubuntu@YOUR_SERVER_IP:/var/www/ai-portfolio/dist/
```

如果你用密钥登录：

```powershell
scp -i "C:\path\to\your-key.pem" -r "C:\Users\Administrator\Documents\个人网站\dist\*" root@YOUR_SERVER_IP:/var/www/ai-portfolio/dist/
```

## 6. 上传 Nginx 配置

项目里已经有一份 Nginx 配置：

```text
deploy/nginx-portfolio.conf
```

从本地上传到服务器临时目录：

```powershell
scp "C:\Users\Administrator\Documents\个人网站\deploy\nginx-portfolio.conf" root@YOUR_SERVER_IP:/tmp/ai-portfolio.conf
```

如果你的 SSH 用户是 `ubuntu`：

```powershell
scp "C:\Users\Administrator\Documents\个人网站\deploy\nginx-portfolio.conf" ubuntu@YOUR_SERVER_IP:/tmp/ai-portfolio.conf
```

登录服务器：

```powershell
ssh root@YOUR_SERVER_IP
```

把配置移动到 Nginx 配置目录：

```bash
sudo mv /tmp/ai-portfolio.conf /etc/nginx/conf.d/ai-portfolio.conf
```

编辑配置：

```bash
sudo nano /etc/nginx/conf.d/ai-portfolio.conf
```

如果你有域名，把这一行：

```nginx
server_name example.com www.example.com;
```

改成：

```nginx
server_name your-domain.com www.your-domain.com;
```

这里的 `your-domain.com` 要换成你的真实域名。

如果暂时没有域名，先改成服务器公网 IP：

```nginx
server_name YOUR_SERVER_IP;
```

确认站点根目录是：

```nginx
root /var/www/ai-portfolio/dist;
```

确认保留这段配置：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

这段是为了让 React Router 的页面刷新不报 404，例如 `/about`、`/projects/xxx`。

## 7. 检查并重载 Nginx

在服务器执行：

```bash
sudo nginx -t
```

如果输出里有：

```text
syntax is ok
test is successful
```

重载 Nginx：

```bash
sudo systemctl reload nginx
```

现在可以访问：

```text
http://YOUR_SERVER_IP
```

或者：

```text
http://example.com
```

## 8. 腾讯云安全组放行端口

如果浏览器打不开，但服务器里 Nginx 正常，优先检查腾讯云控制台的安全组。

需要放行：

```text
TCP 80   HTTP
TCP 443  HTTPS
```

如果服务器系统防火墙也开启了，Ubuntu 常见命令：

```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw status
```

CentOS / TencentOS 常见命令：

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

如果 `firewall-cmd` 不存在，说明你这台服务器可能没有启用 firewalld，主要看腾讯云安全组即可。

## 9. 域名解析

如果你有域名，在腾讯云 DNS 解析里添加：

```text
记录类型：A
主机记录：@
记录值：YOUR_SERVER_IP
```

如果你还要支持 `www.example.com`：

```text
记录类型：A
主机记录：www
记录值：YOUR_SERVER_IP
```

解析生效后，访问：

```text
http://example.com
http://www.example.com
```

## 10. 配置 HTTPS

域名解析到服务器后，再配置 HTTPS。没有域名时不要做这一步。

Ubuntu / Debian：

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

CentOS / TencentOS：

```bash
sudo yum install -y epel-release
sudo yum install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

把 `example.com` 和 `www.example.com` 换成你的真实域名。

Certbot 执行过程中如果问是否重定向 HTTP 到 HTTPS，建议选择重定向。

检查证书自动续期：

```bash
sudo certbot renew --dry-run
```

## 11. 以后每次更新网站

本地重新构建：

```powershell
cd "C:\Users\Administrator\Documents\个人网站"
npm run build
```

上传新的 `dist`：

```powershell
scp -r "C:\Users\Administrator\Documents\个人网站\dist\*" root@YOUR_SERVER_IP:/var/www/ai-portfolio/dist/
```

一般不需要重启 Nginx，因为只是静态文件变了。浏览器如果没看到更新，可以强制刷新：

```text
Ctrl + F5
```

## 12. 常见问题

### 首页能打开，刷新子页面 404

检查 Nginx 配置里是否有：

```nginx
try_files $uri $uri/ /index.html;
```

修改后执行：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 浏览器访问超时

按顺序检查：

```bash
sudo systemctl status nginx
sudo nginx -t
```

然后检查腾讯云安全组是否放行 `80` 和 `443`。

### 访问显示 Nginx 默认页

说明你的站点配置没有生效，或者默认站点抢先匹配了请求。

检查配置文件：

```bash
ls /etc/nginx/conf.d/
cat /etc/nginx/conf.d/ai-portfolio.conf
```

如果 Ubuntu 的默认站点影响了访问，可以禁用默认站点：

```bash
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 403 Forbidden

检查目录权限和文件是否存在：

```bash
ls -la /var/www/ai-portfolio/dist
sudo chmod -R 755 /var/www/ai-portfolio
sudo nginx -t
sudo systemctl reload nginx
```

### HTTPS 证书申请失败

先确认：

```text
域名已经解析到服务器公网 IP
腾讯云安全组已经放行 80 和 443
Nginx 通过 HTTP 可以正常访问网站
```

这些没做好，Certbot 大概率会失败。
