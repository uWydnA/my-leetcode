(function () {
  var homeBackStyle = `background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgNzIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MTI8L3RpdGxlPgogICAgPGcgaWQ9IjEyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMjMuNDE0MjEzNiwxOC40OTg3MzczIEMyMy45NjY0OTgzLDE4LjQ5ODczNzMgMjQuNDE0MjEzNiwxOC45NDY0NTI2IDI0LjQxNDIxMzYsMTkuNDk4NzM3MyBMMjQuNDE0MjEzNiw0OC40OTc3MzczIEw1My40MTQyMTM2LDQ4LjQ5ODczNzMgQzUzLjkyNzA0OTQsNDguNDk4NzM3MyA1NC4zNDk3MjA3LDQ4Ljg4NDc3NzUgNTQuNDA3NDg1OCw0OS4zODIxMTYyIEw1NC40MTQyMTM2LDQ5LjQ5ODczNzMgTDU0LjQxNDIxMzYsNTIuNDk4NzM3MyBDNTQuNDE0MjEzNiw1My4wNTEwMjIxIDUzLjk2NjQ5ODMsNTMuNDk4NzM3MyA1My40MTQyMTM2LDUzLjQ5ODczNzMgTDUzLjQxNDIxMzYsNTMuNDk4NzM3MyBMMjMuNDMxNTIyNyw1My40OTg1OTA2IEMyMy40MjU3NjQ3LDUzLjQ5ODY4ODMgMjMuNDE5OTk0OSw1My40OTg3MzczIDIzLjQxNDIxMzYsNTMuNDk4NzM3MyBMMjAuNDE0MjEzNiw1My40OTg3MzczIEMxOS44NjE5Mjg4LDUzLjQ5ODczNzMgMTkuNDE0MjEzNiw1My4wNTEwMjIxIDE5LjQxNDIxMzYsNTIuNDk4NzM3MyBMMTkuNDE0MjEzNiwxOS40OTg3MzczIEMxOS40MTQyMTM2LDE4Ljk0NjQ1MjYgMTkuODYxOTI4OCwxOC40OTg3MzczIDIwLjQxNDIxMzYsMTguNDk4NzM3MyBMMjMuNDE0MjEzNiwxOC40OTg3MzczIFoiIGlkPSIxIiBmaWxsPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNi45MTQyMTQsIDM1Ljk5ODczNykgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC0zNi45MTQyMTQsIC0zNS45OTg3MzcpICI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="); display: block; opacity: 1`;
  var logoStyle = `opacity:0`;
  var homeBackClassName = ".home-back";
  var logoClassName = ".component-logo";
  var wppContainer = '.wpp_container'
  var showBackDuration = 2000;
  var homeBack = document.querySelector(homeBackClassName);
  var logo = document.querySelector(logoClassName);

  function findNewDom(className) {
    return document.querySelector(className);
  }

  function mutationCallback(mutationsList) {
    for (let mutation of mutationsList) {
      headerRender(mutation);
    }
  }

  function headerRender(mutation) {
    if (mutation.type === "attributes") {
      homeBack = findNewDom(homeBackClassName);
      logo = findNewDom(logoClassName);
      changeLogo({
        homeBack,
        logo,
        showBackDuration,
      });
    }
  }

  function addGoBackFunc({ homeBack }) {
    homeBack.addEventListener("click", (event) => {
      window.parent.postMessage("homeback", "*");
    });
  }

  function changeLogo({ homeBack, logo, showBackDuration }) {
    var homeBackId;
    homeBack = findNewDom(homeBackClassName);
    //设置返回按钮
    if (homeBack) {
      const style = homeBack.getAttribute("style");
      if (style) return;
      clearTimeout(homeBackId);
      homeBackId = setTimeout(() => {
        if (logo) {
          logo.setAttribute("style", logoStyle);
        }
        homeBack.setAttribute("style", homeBackStyle);
        addGoBackFunc({
          homeBack,
        });
      }, showBackDuration);
    }
  }

  function setUpObserver() {
    var root = findNewDom(wppContainer);

    var config = {
      attributes: true,
      childList: true,
      subtree: true,
    };
    // 创建一个观察器实例并传入回调函数
    var observer = new MutationObserver(mutationCallback);
    // 以上述配置开始观察目标节点
    observer.observe(root, config);
  }

  function main() {
    setUpObserver();
    changeLogo({
      homeBack,
      logo,
      showBackDuration,
    });
  }

  main();
})();
