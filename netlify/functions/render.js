exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
        <!DOCTYPE html>
        <html lang="ko">
          <head>
            <meta charset="UTF-8">
            <title>김재희 포트폴리오</title>
            <meta property="og:url" content="https://frontend-portfolio-jaehee-2025.netlify.app/" />
            <meta property="og:title" content="김재희 포트폴리오" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://frontend-portfolio-jaehee-2025.netlify.app/assets/images/photo.jpeg" />
            <meta property="og:description" content="프론트엔드 개발자 김재희의 포트폴리오 입니다." />
          </head>
          <body>
            <h1>Welcome to my portfolio</h1>
          </body>
        </html>
      `,
  };
};
