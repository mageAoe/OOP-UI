# OOP-UI

<h1 align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/logo.gif">
      <img alt="Flutter" src="./public/logo.gif">
    </picture>
</h1>


**注意：** pnpm + monorepo 架构可以 在根目录下按照的依赖，在子模块里面都可以使用，所以为了避免在不同的模块中安装相同的依赖，相同的依赖咱们都提取到根项目中

由于咱们项目配置了 monorepo，在根目录（workspace-root）下安装依赖需要指定 -w，否则安装失败

比如：```pnpm install vue -w```

