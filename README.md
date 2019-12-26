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
