# GitHub Pages 部署指南

这个项目已经配置了 GitHub Actions 自动部署到 GitHub Pages。你把代码推送到 GitHub 后，GitHub 会自动执行 `npm ci`、`npm run build`，然后把 `dist/` 发布成静态网站。

## 1. 创建 GitHub 仓库

建议仓库名用英文，例如：

```text
portfolio
```

不要用中文仓库名。不是不能用，是没必要给部署路径和链接可读性找麻烦。

如果只是临时放简历，GitHub Pages 地址会类似：

```text
https://你的GitHub用户名.github.io/portfolio/
```

这比裸 IP 体面很多。

## 2. 推送代码

在本地项目目录执行：

```powershell
cd "C:\Users\Administrator\Documents\个人网站"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

把 `YOUR_GITHUB_USERNAME` 和 `portfolio` 换成你的 GitHub 用户名和仓库名。

如果你的仓库已经存在并且已经关联了远程地址，只需要：

```powershell
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

## 3. 开启 GitHub Pages

进入 GitHub 仓库页面：

```text
Settings -> Pages
```

在 `Build and deployment` 里选择：

```text
Source: GitHub Actions
```

保存后，回到：

```text
Actions
```

等待 `Deploy GitHub Pages` 工作流执行完成。

## 4. 访问网站

部署成功后，GitHub 会给出 Pages 地址，通常是：

```text
https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/
```

例如：

```text
https://zhangsan.github.io/portfolio/
```

## 5. 为什么这个项目额外做了路由处理

这个项目使用 React Router 的 `BrowserRouter`。GitHub Pages 不像 Nginx，不能配置：

```nginx
try_files $uri $uri/ /index.html;
```

所以如果不处理，直接刷新这些页面可能会 404：

```text
/about
/experience
/projects
/projects/xxx
```

项目里已经加了两个处理：

```text
vite.config.ts          根据 GitHub 仓库名设置 Vite base 路径
public/404.html         把 GitHub Pages 的 404 路由重定向回 React 应用
```

因此部署到普通仓库路径时也能正常打开和刷新页面。

## 6. 后续更新网站

以后改完内容后，只需要：

```powershell
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions 会自动重新部署。

## 7. 简历里怎么写

备案成功前，简历里建议先写 GitHub Pages 地址：

```text
作品集：https://YOUR_GITHUB_USERNAME.github.io/portfolio/
```

不要写服务器裸 IP。裸 IP 看起来像临时测试地址，不适合作为简历入口。

等域名备案完成后，再换成：

```text
作品集：https://your-domain.com
```
