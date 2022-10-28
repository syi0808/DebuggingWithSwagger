import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    chrome.devtools.panels.create("Network With Swagger", "null", "src/Devtools/index.html");
  }, []);

  return (
    <>
      ㅁㄴㅇ
      ㅂㅈㄷ
      ㅋㅌㅊㅋㅌㅊ
    </>
  );
}

export default App;
