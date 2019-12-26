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

    var = args = process.argv
    console.log(args[2]);

args[0]은 node.js 런타임환경? 주소
args[1]은 실행파일의 주소
args[2]은 콘솔에서의 입력값
