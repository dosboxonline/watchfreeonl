(function () {
  const scripts = [
    "https://prosecutorremarkablegodforsaken.com/2f/1f/b8/2f1fb8ca4372ea6acfe65d9d8b162a69.js",
    "https://prosecutorremarkablegodforsaken.com/a1/4f/85/a14f852f0830c202ec016fc2c9a3ba80.js"
  ];

  scripts.forEach(src => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  });
})();