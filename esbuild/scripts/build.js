let envPlugin = {
  name: 'env',
  setup(build) {
    // 文件解析时触发
    // 将插件作用域限定于env文件，并为其标识命名空间"env-ns"
    build.onResolve({ filter: /^env$/ }, args => ({
      path: args.path,
      namespace: 'env-ns',
    }))

    // 加载文件时触发
    // 只有命名空间为"env-ns"的文件才会被处理
    // 将process.env对象反序列化为字符串并交由json-loader处理
    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json',
    }))
  },
}

require('esbuild').build({
  entryPoints: ['app.jsx'],
  bundle: true,
  sourcemap: true,
  outfile: 'dist/output.js',
  // 应用插件
  plugins: [envPlugin],
}).catch(() => process.exit(1))
