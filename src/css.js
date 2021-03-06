const string = `
 * {
    box-sizing: border-box;
  }
 *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
    #html {
        background: #ffe600;
    }
    #pikachu {
        position: absolute;
        width: 420px;
        height: 235px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%);
        -moz-transform: translateY(-50%) translateX(-50%);
        -ms-transform: translateY(-50%) translateX(-50%);
        transform: translateY(-50%) translateX(-50%);
    }
    .eye {
        width: 57px;
        height: 57px;
        border: 3px solid black;
        background: #2e2e2e;
        border-radius: 100%;
        position: absolute;
        margin-left: 60px;
    }
    .eye:after {
        width: 25px;
        height: 25px;
        border: 3px solid black;
        background: #fff;
        content: "";
        display: block;
        position: absolute;
        border-radius: 100%;
        margin-left: 7px;
        margin-top: -2px;
    }
    .eye.right {
        right: 60px;
    }
    .nose {
        position: absolute;
        margin: 30px calc(50% - 11px);
        margin-top: 38px;
        width: 0;
        height: 0;
        z-index: 1; /* Thanks for the solution to @440design */
        border-top: 9px solid black;
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
        box-shadow: 0 -1px 0 black;
    }
    .nose:before {
        content: "";
        display: block;
        position: absolute;
        width: 22px;
        height: 5px;
        background: black;
        border-top-left-radius: 11px 5px;
        border-top-right-radius: 11px 5px;
        margin-top: -14px;
        margin-left: -11px;
    }
    .nose:hover {
        -webkit-animation: nose 0.23s infinite linear;
        -moz-animation: nose 0.23s infinite;
        -ms-animation: nose 0.23s infinite;
        animation: nose 0.23s infinite linear;
    }
    .ridiculousMouth {
        position: absolute;
        width: 228px;
        height: 180px;
        margin-top: 65px;
        margin-left: calc(50% - 118px);
        overflow: hidden;
    }
    .ridiculousMouth:after {
        content: "";
        display: block;
        position: absolute;
        width: 80px;
        height: 25px;
        background: #ffe600;
        border: 3px solid black;
        border-top: none;
        border-left: none;
        right: 25px;
        top: -5px;
        -webkit-transform: rotate(25deg);
        -moz-transform: rotate(25deg);
        -ms-transform: rotate(25deg);
        transform: rotate(25deg);
        border-bottom-right-radius: 60px 30px;
        box-shadow: 0 -10px 0 #ffe600, -5px -3px 0 #ffe600;
    }
    .ridiculousMouth:before {
        content: "";
        display: block;
        position: absolute;
        width: 80px;
        height: 25px;
        background: #ffe600;
        border: 3px solid black;
        border-top: none;
        border-right: none;
        left: 35px;
        top: -5px;
        -webkit-transform: rotate(-25deg);
        -moz-transform: rotate(-25deg);
        -ms-transform: rotate(-25deg);
        transform: rotate(-25deg);
        border-bottom-left-radius: 60px 30px;
        box-shadow: 0 -10px 0 #ffe600, 5px -3px 0 #ffe600;
        z-index: 1;
    }
    .ridiculousMouth > div {
        position: absolute;
        background: #ff485f;
        width: 228px;
        height: 800px;
        border: 4px solid black;
        border-bottom-left-radius: 118px 800px;
        border-bottom-right-radius: 118px 800px;
        margin-top: -637px;
        overflow: hidden;
    }
    .ridiculousMouth > div:after {
        content: "";
        position: absolute;
        display: block;
        width: 130px;
        height: 100px;
        box-shadow: 0 -70px 0 #9b000a;
        bottom: 35px;
        margin-left: 49px;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
    }
    .cheek {
        width: 82px;
        height: 82px;
        border: 3px solid black;
        border-radius: 100%;
        position: absolute;
        margin-top: 110px;
        background: #f00;
    }
    .cheek.right {
        right: 0;
    }

    @-webkit-keyframes nose {
        0% {
        -webkit-transform: rotate(0deg);
        }
        33% {
        -webkit-transform: rotate(-5deg);
        }
        67% {
        -webkit-transform: rotate(5deg);
        }
        100% {
        -webkit-transform: rotate(0deg);
        }
    }
    @-moz-keyframes nose {
        0% {
        -moz-transform: rotate(0deg);
        }
        33% {
        -moz-transform: rotate(-5deg);
        }
        67% {
        -moz-transform: rotate(5deg);
        }
        100% {
        -moz-transform: rotate(0deg);
        }
    }
    @-ms-keyframes nose {
        0% {
        -ms-transform: rotate(0deg);
        }
        33% {
        -ms-transform: rotate(-5deg);
        }
        67% {
        -ms-transform: rotate(5deg);
        }
        100% {
        -ms-transform: rotate(0deg);
        }
    }
    @keyframes nose {
        0% {
        transform: rotate(0deg);
        }
        33% {
        transform: rotate(-5deg);
        }
        67% {
        transform: rotate(5deg);
        }
        100% {
        transform: rotate(0deg);
        }
    }
    既然你诚心诚意的发问了
    那我就大发慈悲的告诉你
    为了防止世界的破坏
    为了保护世界的和平
    贯彻爱与真实的邪恶
    可爱又迷人的反派角色，武藏，小次郎
    我们是穿梭在银河的火箭队-白洞
    白色的明天在等着我们，就是这样！
    喵！

    `;
export default string;
