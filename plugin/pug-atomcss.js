import atomcssLoader from './atomcss-loader.js';

const fileRegex = /\.(vue)$/;

export default function myPlugin() {
  return {
    name: 'vite-plugin-vue-transform-pugcss',
    enforce: 'pre',
    transform(code, id) {
      if (fileRegex.test(id)) {
        let transformCode = atomcssLoader(code);
        return {
          code: transformCode,
          map: null,
        };
      }
    },
    // TODO[2023-02-14][2023]: 遇到问题，添加到尾部的 <style> 标签无法触发 vite 的 hmr，暂时通过 full-reload 的方式解决
    handleHotUpdate({ server }) {
      server.ws.send({ type: 'full-reload' });
    },
  };
}
