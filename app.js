// 1. 题库数据 (填入我们之前精简的36题，按 RIASEC 标记类型)
const questions = [
    { id: 1, type: 'C', text: "老师布置作业如果只说“随便写点”，我会很难受，我更希望有明确的字数、格式和打分标准。" },
    { id: 2, type: 'R', text: "遇到自行车掉链子、笔坏了或家里小物件损坏，比起花钱找人，我更喜欢自己动手修好。" },
    { id: 3, type: 'I', text: "遇到没见过的数理化难题，哪怕花上一整晚时间，我也要把它彻底想通才痛快。" },
    { id: 4, type: 'A', text: "做PPT、写笔记或收拾桌面时，我非常在意排版好不好看、颜色搭不搭配。" },
    { id: 5, type: 'S', text: "同学遇到伤心事或者压力大时，我通常是那个很愿意倾听并安抚他们情绪的人。" },
    { id: 6, type: 'E', text: "在小组作业或办班级活动时，我通常是那个主动站出来分配任务、拍板做决定的人。" },
    { id: 7, type: 'R', text: "相比于整节课坐在座位上听讲，我更喜欢有身体活动的课（比如体育课、物理化学实验课）。" },
    { id: 8, type: 'S', text: "如果我掌握了一个好用的学习技巧，我会很乐意甚至很主动地教给其他不懂的同学。" },
    { id: 9, type: 'C', text: "我的书桌、抽屉或电脑里的文件总是收拾得整整齐齐，需要找东西时非常快。" },
    { id: 10, type: 'E', text: "我觉得做事情就应该去争取最好的结果，或者主动去竞选班委、社团负责人。" },
    { id: 11, type: 'I', text: "相比于看搞笑短视频，我更喜欢看能涨知识的硬核科普视频（比如科技解析、历史解密）。" },
    { id: 12, type: 'A', text: "写作文或办板报时，我极度讨厌套用千篇一律的模板，总想弄点与众不同的新创意。" },
    { id: 13, type: 'I', text: "看到一个复杂的社会现象或自然现象，我总是习惯性地去分析它背后深层的逻辑和原因。" },
    { id: 14, type: 'R', text: "买来的拼图、高达模型或者需要复杂组装的东西，我总能很快且专注地拼好。" },
    { id: 15, type: 'E', text: "当我和同学意见不一致时，我很擅长用各种理由把他们说服，让他们听我的。" },
    { id: 16, type: 'C', text: "每次大考交卷前，我都会强迫症一样地仔细检查有没有算错小数点或者填错答题卡。" },
    { id: 17, type: 'A', text: "听音乐、看小说或看电影时，我很容易深陷其中，脑子里能浮现出非常生动的情绪和画面。" },
    { id: 18, type: 'S', text: "在一个小组里，如果有人被冷落或者情绪不对，我通常能第一时间察觉到。" },
    { id: 19, type: 'E', text: "组织活动时，比起自己埋头干活，我更擅长把合适的人安排到合适的位置上。" },
    { id: 20, type: 'I', text: "我特别讨厌死记硬背，如果不理解公式或概念是怎么推导出来的，我就很难记住。" },
    { id: 21, type: 'S', text: "参加班级或社团活动时，比起一个人单干，我更喜欢大家聚在一起互相配合的氛围。" },
    { id: 22, type: 'A', text: "我常常脑洞大开，有很多天马行空的想法，哪怕有些想法看起来很不切实际。" },
    { id: 23, type: 'C', text: "我习惯把每天要做的作业和事情列成清单，划掉一项就有一项的安全感。" },
    { id: 24, type: 'R', text: "我对书本上的纯理论不太感冒，但我很在乎学的东西“在现实中到底能干嘛”。" },
    { id: 25, type: 'S', text: "看到别人因为我的帮助而解决了困难，我会获得极大的满足感。" },
    { id: 26, type: 'C', text: "比起自己去开拓一个充满未知的新领域，我更愿意在一个规章制度完善的环境里按部就班地工作。" },
    { id: 27, type: 'R', text: "外出旅游或参加活动时，比起写攻略，我更喜欢负责看地图指路、搬运东西或搭帐篷等实际操作。" },
    { id: 28, type: 'E', text: "我非常看重个人的成就、地位和未来的收入潜力，做事通常带有比较明确的目的性。" },
    { id: 29, type: 'A', text: "极度枯燥、机械重复的刷题生活会让我感到窒息，我需要时间去听歌、画画或发呆来回血。" },
    { id: 30, type: 'I', text: "当大家都在盲目跟风讨论一件事时，我通常会持怀疑态度，并自己去查资料寻找真相。" },
    { id: 31, type: 'A', text: "我对自身的情绪变化非常敏感，也常常能察觉到一部作品（书或电影）里的细腻情感。" },
    { id: 32, type: 'R', text: "面对复杂的人际纠纷我会觉得很烦，我更喜欢一个人安静地对付一件具体的物品或任务。" },
    { id: 33, type: 'C', text: "我对整理数据、做表格或者核对账目这类需要极度细心和耐心的事情，并不会感到排斥。" },
    { id: 34, type: 'S', text: "相比于面对冰冷的机器或数据，我更向往未来能从事天天和不同人打交道的工作。" },
    { id: 35, type: 'E', text: "在公开场合发言或进行辩论时，我不会感到怯场，反而觉得很有挑战性。" },
    { id: 36, type: 'I', text: "我很享受一个人沉浸在复杂的逻辑思考中，即使这种思考在外人看来很枯燥。" }
];

const profiles = {

    primary: {

        R:"你是一个倾向于‘眼见为实’的实干家。你喜欢处理具体、可操作的任务，内心抗拒空谈理论；在未来的职业规划中，比起纯文科的万金油方向，你更看重能否掌握一门不可替代的‘硬技能’。",

        I:"你具备极强的逻辑剥离能力与求知欲。你习惯探究事物的底层规则，相比于处理复杂的人际应酬，你更享受沉浸在专业领域的深度钻研与问题解决中。",

        A:"你对情绪、美感或新事物有着敏锐的直觉。你内心极度抗拒机械重复和循规蹈矩的安排，你需要一定的自由度和创造空间，对传统的‘螺丝钉’式工作极易产生厌倦。",

        S:"你拥有出色的同理心和人际感知力。在帮助他人、传递知识或团队协作中，你能获得巨大的自我效能感。与冷冰冰的机器或数据打交道相比，你天然更擅长‘与人打交道’。",

        E:"你是一个强目标导向的破局者。你对结果有着清晰的渴望，具备较强的影响力和决策力。你不惧怕竞争，甚至享受在团队中发挥主导作用，对未来的职业天花板和发展空间有较高要求。",

        C:"你追求极高的确定性和条理性。做事严谨、极度注重细节是你的底色。相比于在未知领域盲目冒险，你更适合在规则明确、体系完善的平台上按部就班地稳扎稳打。"
    },

    secondary:{

        R:"同时，你具备很好的务实精神，执行力强，不畏惧辛苦的实操。",

        I:"并且，你有着冷静理智的头脑，遇到问题习惯先思考再行动。",

        A:"同时，你思维活跃，偶尔会迸发出打破常规的独特想法。",

        S:"并且，你性格中带有温和包容的一面，注重团队氛围与他人的感受。",

        E:"同时，你骨子里带有一股不服输的劲头，敢于争取属于自己的资源。",

        C:"并且，你自带风险规避的雷达，做重大决策前习惯深思熟虑。"
    },

    hook:
    `<br><br>
    <div class="warning-box">
        <h4>⚠️ 志愿排雷提示</h4>

        <p>
        性格倾向并不等同于最终专业选择。
        </p>

        <p>
        结合真实高考成绩与选科组合，
        哪些热门专业容易踩坑？
        哪些低分专业更容易逆袭？
        </p>

        <p>
        👉 请截图保存结果页面。
        </p>
    </div>`
};

// 2. 状态管理 (包含防刷新逻辑)
let state = {
    currentIndex: 0,
    scores: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
};

// 初始化校验
function initApp() {
    const savedState = localStorage.getItem('hollandState');
    if (savedState) {
        state = JSON.parse(savedState);
        if (state.currentIndex > 0 && state.currentIndex < questions.length) {
            document.getElementById('btn-resume').classList.remove('hidden');
        }
    }
    
    // 绑定事件
    document.getElementById('btn-start').addEventListener('click', () => startQuiz(false));
    document.getElementById('btn-resume').addEventListener('click', () => startQuiz(true));
    document.getElementById('btn-reset').addEventListener('click', resetQuiz);
    

}

// 3. 视图切换与渲染逻辑
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById(viewId).classList.add('active');
}

function startQuiz(resume) {
    if (!resume) {
        state.currentIndex = 0;
        state.scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    }
    switchView('view-quiz');

setTimeout(()=>{
    initSwipe();
},100);

renderQuestion();
}

function renderQuestion() {
    if (state.currentIndex >= questions.length) {
        showResult();
        return;
    }
    const q = questions[state.currentIndex];
    document.getElementById('question-text').innerText = q.text;
    document.getElementById('question-counter').innerText = `${state.currentIndex + 1}/${questions.length}`;
    
    // 更新进度条
    const progress = ((state.currentIndex) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function handleAnswer(score) {
    const currentQ = questions[state.currentIndex];
    state.scores[currentQ.type] += score;
    state.currentIndex++;
    
    // 每次答题后实时持久化，防止刷新丢失
    localStorage.setItem('hollandState', JSON.stringify(state));
    
    renderQuestion();
}

// 4. 结果计算与雷达图渲染
function showResult() {
    switchView('view-result');
    localStorage.removeItem('hollandState'); // 答题完成，清除缓存
    
    // 找出得分最高的两项
    const sortedScores = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);
    const primaryCode = sortedScores[0][0];
    const secondaryCode = sortedScores[1][0];
    
    document.getElementById('personality-code').innerText = `核心代码：${primaryCode}${secondaryCode}`;

    const finalDescription =
    profiles.primary[primaryCode]
    + "<br><br>"
    + profiles.secondary[secondaryCode]
    + profiles.hook;

document
    .getElementById("result-desc")
    .innerHTML =
    finalDescription;
    
    // 渲染图表
    renderRadarChart(state.scores);
}

function renderRadarChart(scores) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['现实型(R)', '研究型(I)', '艺术型(A)', '社会型(S)', '企业型(E)', '常规型(C)'],
            datasets: [{
                label: '潜能倾向',
                data: [scores.R, scores.I, scores.A, scores.S, scores.E, scores.C],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 12, // 每项6题，每题最高2分
                    ticks: { stepSize: 2, display: false }
                }
            }
        }
    });
}

function resetQuiz() {
    localStorage.removeItem('hollandState');
    location.reload();
}

let card;
let startX = 0;
let startY = 0;

function initSwipe() {

    card = document.getElementById("swipe-card");

    if (!card) return;

    card.addEventListener("touchstart", touchStart);

    card.addEventListener("touchmove", touchMove);

    card.addEventListener("touchend", touchEnd);
}

let startTime = 0;

function touchStart(e){

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    startTime = Date.now();
}

function touchMove(e){

    const dx =
    e.touches[0].clientX-startX;

    const dy =
    e.touches[0].clientY-startY;

    const rotate = dx/8;

   card.style.transform =
`translate(${dx*1.15}px,${dy*1.1}px)
 rotate(${rotate}deg)
 scale(1.03)`;

    const label =
    document.getElementById("swipe-label");

    if(dx>50){

        label.innerText="很符合";
        label.style.color="#22c55e";
        label.style.opacity=1;
    }
    else if(dx<-50){

        label.innerText="不符合";
        label.style.color="#ef4444";
        label.style.opacity=1;
    }
    else if(dy<-50){

        label.innerText="一般般";
        label.style.color="#facc15";
        label.style.opacity=1;
    }
    else{

        label.style.opacity=0;
    }
}

function touchEnd(){

    const matrix =
        new DOMMatrix(
            getComputedStyle(card).transform
        );

    const dx = matrix.m41;
    const dy = matrix.m42;

    const duration =
        Date.now() - startTime;

    const velocityX =
        Math.abs(dx) / duration;

    const velocityY =
        Math.abs(dy) / duration;

    if(dx > 60 || velocityX > 0.4){

        swipeAnswer(2,"right");
    }
    else if(dx < -60 || velocityX > 0.4){

        swipeAnswer(0,"left");
    }
    else if(dy < -60 || velocityY > 0.4){

        swipeAnswer(1,"up");
    }
    else{

        resetCard();
    }
}

function swipeAnswer(score,direction){

    flyOut(direction);

    setTimeout(()=>{

        handleAnswer(score);

        resetCard();

    },250);
}

function flyOut(direction){

    if(direction==="right"){

        card.style.transform=
        "translate(800px,-100px) rotate(30deg)";
    }

    if(direction==="left"){

        card.style.transform=
        "translate(-800px,-100px) rotate(-30deg)";
    }

    if(direction==="up"){

        card.style.transform=
        "translate(0,-900px)";
    }

    card.style.opacity=0;
}

function resetCard(){

    card.style.transition=".25s";

    card.style.transform="";

    card.style.opacity=1;

    document.getElementById(
        "swipe-label"
    ).style.opacity=0;
}

function initParticles(){

    const canvas =
    document.getElementById(
        "particle-canvas"
    );

    if(!canvas) return;

    const ctx =
    canvas.getContext("2d");

    canvas.width=innerWidth;
    canvas.height=innerHeight;

    const particles=[];

    for(let i=0;i<80;i++){

        particles.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            vx:(Math.random()-.5)*0.4,
            vy:(Math.random()-.5)*0.4,

            r:Math.random()*2+1
        });
    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p=>{

            p.x+=p.vx;
            p.y+=p.vy;

            if(p.x<0)p.x=canvas.width;
            if(p.x>canvas.width)p.x=0;

            if(p.y<0)p.y=canvas.height;
            if(p.y>canvas.height)p.y=0;

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI*2
            );

            ctx.fillStyle=
            "rgba(255,255,255,.5)";

            ctx.fill();
        });

        requestAnimationFrame(
            animate
        );
    }

    animate();
}

initApp();

window.addEventListener(
    "load",
    initParticles
);