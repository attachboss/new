var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//处理跨域访问的问题
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var server = app.listen(8081,(error) => {
  if (!error)
    var host = server.address().address;
  var port = server.address().port;
  console.log("welcome \r\n listening on %s:%s", host, port);
})
module.exports = app;

//引用mysql并创建连接池
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "43.142.31.47",
  user: "school",
  password: "NWPYskmPbD5yzH7K",
  database: "school",
  conncetionTimeout: "60000"
});



//登录
app.get("/Admin/Login", (req, res) => {

  var info = {
    user: req.query.userName,
    pwd: req.query.password
  }

  //查询数据库中是否存在相关数据
  let sql = "select * from userlist where Uuser = '" + info.user + "' and Upwd = '" + info.pwd + "'";
  var sqlParams = [info.user, info.pwd];
  db.query(sql, sqlParams, (e, results) => {
    if(results != '' && !e){
      //创建浏览器token
      var token = jwt.sign(info, "PrivateKey111", {
        expiresIn: 60 * 60 * 24,
      });
      
      res.json({
        status: "2",
        message: "登录成功！",
        token: token
      });
    }
    else {
      res.json({
        status: "4",
        message: "用户名或密码错误！"
      });
      return false;
    }
  })
});

app.get("/Role/List", (req, res) => {
  let sql = "select id, Rname, Rdetails from rolelist";
  db.query(sql, (e, results) => {
    if (results != '' && !e) {
      res.send(results)
    }
  })
});

app.get("/Role/GetOne", (req, res) => {
  let sql = "select * from rolelist where RUuser = ?";
  var sqlParams = [req.query["user"]]
  db.query(sql, sqlParams, (e, results) => {
    if (!e) {
      res.send(results);
    }
    else{
      console.log(e.message);
    }
  })
})

app.post("/Role/Add", (req, res) => {
  let role = {
    roleName: req.body.roleName,
    roleDetails: req.body.roleDetails
  }
  let sqlParams = [role.roleName, role.roleDetails];
  let sql = "insert into rolelist(Rname, Rdetails) values(?, ?)"
  db.query(sql, sqlParams, (e, results, fields) => {
    if (!e && results.affectedRows > 0) {
      res.json({
        status: true,
        message: "添加成功",
      })
    }
    else{
      res.json({
        status: false,
        message: "添加失败",
      })
    }
  })
});

app.post("/Role/Update", (req, res) => {
  let role = {
    roleName: req.body.roleName,
    roleDetails: req.body.roleDetails,
  };
  let sqlParams = [role.roleDetails, role.roleName];
  let sql = "update rolelist set Rdetails = ? where Rname = ?"
  db.query(sql ,sqlParams, (e, results, fields) => {
    if (!e && results.affectedRows > 0) {
      res.json({
        status: true,
        message: "修改成功",
      })
    }
    else{
      res.json({
        status: false,
        message: "修改失败",
      })
    }
  })
});

app.post("/Role/Delete", (req, res) => {
  let sqlParams = [req.body.roleName]
  let sql = "delete from rolelist where Rname = ?"
  db.query(sql, sqlParams, (e, results) => {
    if (!e && results.affectedRows > 0) {
      res.json({
        status: true,
        message: "删除成功",
      })
    }
    else{
      res.json({
        status: false,
        message: "删除失败",
      })
    }
  })
})

//分页需要url参数pageSize(每一页的大小)和pageIndex(当前的页码)
app.get("/Course/List", (req, res) => {
  let param = {
    pageSize: 4,
    pageIndex: 5
  }
  let sql = "call GetPage('course', 'id', ?, ?, @pageTotalCount, @lineCount);";
  let sqlParams = [param.pageSize, param.pageIndex]
  db.query(sql, sqlParams, (e, results, fields) => {
    if (!e && results!='') {
      res.send(results)
    }
    else{
      console.log(e.message);
    }
  })
});





/********************************************小程序的后台**************************************** */






//关键词查询
app.get("/query", (req, res) => {
  var queryParam = {
    word: req.query.keyword
  };
  var sqlParams = [queryParam.word];
  let sql = 'select * from xyhos where Name like "%"?"%"; ';
  db.query(sql, sqlParams, (e, results) => {
    if (!e) {
      res.send(results)
    }
    else {
      console.log(e.message);
    }
  })
});

app.get("/order/query", (req, res) => {
  let sql = 'SELECT * FROM school.order;';
  var sqlParams = [];
  db.query(sql, sqlParams, (e, results) => {
    if(!e){
      res.send(results);
    }
    else{
      console.log(e.message);
    }
  })
})


app.get("/order/update", (req, res) => {
  let sql = 'update school.order set Ostate = "进行中" where Oid = ?;';
  var sqlParams = [req.query["Oid"]];
  db.query(sql, sqlParams, (e, results) => {
    if(!e){
      res.send(results);
    }
    else{
      console.log(e.message);
    }
  })
})

app.get("/feverClinic/query", (req, res) => {
  let sql = "select * from school.feverclinic";
  var sqlParams;
  db.query(sql, sqlParams, (e, results)=> {
    if (!e) {
      res.send(results);
    } else {
      console.log(e.message);
    }
  })
})

app.get("/testInstitution/query", (req, res) => {
  let sql = "select * from school.testinstitution";
  var sqlParams;
  db.query(sql, sqlParams, (e, results)=> {
    if (!e) {
      res.send(results);
    } else {
      console.log(e.message);
    }
  })
})

app.get("/emergencyTreatment/query", (req, res) => {
  let sql = "select * from school.emergencytreatment";
  var sqlParams;
  db.query(sql, sqlParams, (e, results)=> {
    if (!e) {
      res.send(results);
    } else {
      console.log(e.message);
    }
  })
})

app.get("/epidemicArea/query", (req, res) => {
  let sql = "select * from school.epidemicArea";
  var sqlParams;
  db.query(sql, sqlParams, (e, results)=> {
    if (!e) {
      res.send(results);
    } else {
      console.log(e.message);
    }
  })
})

app.get("/map", (req, res) => {
  res.sendFile(__dirname + "/" + "test.html")
})


/**************************************************************** */



// var rings = [
//   [
//     [104.0813368, 30.6701333 ],
//     [104.0828859, 30.6694499 ],
//     [104.0810407, 30.6666479 ],
//     [104.0792866, 30.6674680 ]
//   ]
// ];
// var polygon = new Polygon({
//   rings: rings,
//   spatialReference: {wkid: 4326}
// });
// var point = new Point({
//   latitude: 30.6685387,
//   longitude: 30.6685387
// })
// console.log(polygon.contains(point));