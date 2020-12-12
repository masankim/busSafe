
var express = require("express");
var app = express();
var path = require("path");
var session = require("express-session");
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const apiRouter = require('./routes/router')
// c:\apps\bussafe\views 폴더로 기본 template 폴더 지정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 정적파일 기본 경로지정
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "bussafeblckchain111",
    resave: false,
    saveUninitialized: true,
  })
);
app.use('/', apiRouter)


var port = 8080;
app.listen(port, function () {
  var check_time = moment().format("YYYYMMDDHHmmss");
  console.log(check_time);
  console.log("웹 서버 시작", port);
});
