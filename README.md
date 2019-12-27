## Nodejs

# 주소

http://opentutorials.org:3000/main?id=HTML&page=12

http : protocol

opentutorials.org : host(domain)

3000 : port

main : path

id=HTML&page=12 : query string

query string 의 시작은 ? 로 하기로 약속

= 은 구분자

# process.argv

    var args = process.argv
    console.log(args[2]);

args[0]은 node.js 런타임환경? 주소
args[1]은 실행파일의 주소
args[2]은 콘솔에서의 입력값

# callback

함수의 이름이 없는 함수를 익명 함수라고 한다.

엄청 느린 함수에 callback() 함수로 익명 함수를 호출한다.

# Node.js의 패키지 매니저 npm, PM2

    npm install pm2 -g

pm2 설치

    pm2 start main.js

main.js 실행

    pm2 monit

현재 pm2 에 실행되고 있는 프로그램 목록 확인

나가려면 q

    pm2 list

현재 실행중인 프로세스의 리스트 출력

    pm2 stop main

main name 종료

    pm2 start main.js --watch

main.js 의 파일이 저장될 시 main.js가 재실행된다.

    pm2 log

문제점이 있을 때 문제점을 보여준다.

# HTML-Form

Form 은 웹브라우저에서 서버로 데이터를 전송할 때 사용하는 기능이다.

    <form action="link" method="post">

link로 데이터를 전송하고 post 방식은 필요한 데이터를 url로 보내면 안될 때 눈에 보이지 않는 방식으로 보내는 방법이다. 서버의 데이터를 수정 삭제 생성할 때 반드시 post 방식으로 한다.

    <form action="link" method="get">

get 방식은 서버에 데이터를 가져올때 사용한다.

# fs.fileWrite

    fs.writeFile(`link`, data, "utf8", function(err) {
        response.writeHead(200);
        response.end("success");
    });

# 리다이렉션

    response.writeHead(302, {Location: `link`});

리다이렉션이란 사용자가 어떤 페이지를 왔을때 처리를 한 후 다른 페이지로 팅겨버리는 것.

# fs.rename

    fs.rename(oldPath, newPath, callback)

# fs.unlink

    fs.unlink(path,callback)

파일 삭제

# 객체의 반복

    var roles = {
        programmer: "egoing",
        designer: "k8805",
        manager: "hoya"
    };

    for (var name in roles) {
        console.log("object => ", name, "value => ", roles[name]);
    }
