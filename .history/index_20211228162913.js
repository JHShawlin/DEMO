// 4. 获取游戏场景
var scene = document.getElementsByClassName('scene')[0];
// 获取战斗层
var warLayer = document.getElementsByClassName('war-layer')[0];

// 5. 获取小飞机
var hero = document.getElementById('hero');

// 6. 使用鼠标移动小飞机
// 鼠标移动事件
scene.addEventListener("mousemove", function (event) {

    // 获得鼠标的位置坐标
    var x = event.clientX;
    var y = event.clientY;

    // 把鼠标的坐标赋值给飞机
    hero.style.top = y - hero.offsetHeight / 2 + 'px';
    hero.style.left = x - hero.offsetWidth / 2 + 'px';
})



// 7.发射子弹
function makeBullet() {
    // 生成子弹元素
    var bullet = document.createElement('img');
    // 设置子弹图片
    bullet.src = "./img/bullet1.png";
    // 这是子弹样式
    bullet.setAttribute('class', 'bullet');
    // 设置子弹位置，在飞机头部中间位置发射
    bullet.style.left = hero.offsetLeft + hero.offsetWidth / 2 + -5 + 'px';
    bullet.style.top = hero.offsetTop - 20 + 'px';

    // 把子弹添加到战斗层页面上
    warLayer.appendChild(bullet);
}


// 8. 使用定时器定时生成子弹
var timer = setInterval(function () {
    makeBullet();
}, 100)


/** 子弹飞行动画 **/ 

// var 子弹飞行速度
var speed = 10;
var espeed = 5;
// 9.子弹移动动画
setInterval(function () {

    var bullets = document.getElementsByClassName('bullet');
    var enemies = document.getElementsByClassName('enemy');
    // 子弹飞行
    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];

        bullet.style.top = bullet.offsetTop - speed + 'px';

        if (bullet.offsetTop < -100) {
            warLayer.removeChild(bullet);
        }

    }



    // 12. 敌机飞行
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        enemy.style.top = enemy.offsetTop + espeed + 'px';

        if (enemy.offsetTop > scene.offsetHeight) {

            warLayer.removeChild(enemy);
        }
    }

}, 16)


// 10. 生成敌机
function makeEnemy() {
    // 生成子弹元素
    var enemy = document.createElement('img');
    // 设置子弹图片
    enemy.src = "./img/enemy1.png";
    // 这是子弹样式
    enemy.setAttribute('class', 'enemy');
    // 设置子弹位置，在飞机头部发射
    enemy.style.left = Math.random() * scene.offsetWidth - 100 + 'px';
    enemy.style.top = '0px';

    // 把子弹添加到页面上
    warLayer.appendChild(enemy);
}

// 11. 使用定时器定时生成敌机
var timer = setInterval(function () {
    makeEnemy();
}, 1000)
