// 诗词数据库
const poems = [
  { content: "床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。" },
  { content: "春眠不觉晓，\n处处闻啼鸟。\n夜来风雨声，\n花落知多少。" },
  { content: "白日依山尽，\n黄河流入海。\n欲穷千里目，\n更上一层楼。" },
  { content: "两个黄鹂鸣翠柳，\n一行白鹭上青天。\n窗含西岭千秋雪，\n门泊东吴万里船。" },
  { content: "君不见，黄河之水天上来，\n奔流到海不复回。\n君不见，高堂明镜悲白发，\n朝如青丝暮成雪。" },
  { content: "海上生明月，\n天涯共此时。\n情人怨遥夜，\n竟夕起相思。" },
  { content: "空山新雨后，\n天气晚来秋。\n明月松间照，\n清泉石上流。" },
  { content: "朝辞白帝彩云间，\n千里江陵一日还。\n两岸猿声啼不住，\n轻舟已过万重山。" },
  { content: "唧唧复唧唧，\n木兰当户织。\n不闻机杼声，\n惟闻女叹息。" },
  { content: "慈母手中线，\n游子身上衣。\n临行密密缝，\n意恐迟迟归。" },
  { content: "锄禾日当午，\n汗滴禾下土。\n谁知盘中餐，\n粒粒皆辛苦。" },
  { content: "日照香炉生紫烟，\n遥看瀑布挂前川。\n飞流直下三千尺，\n疑是银河落九天。" },
  { content: "鹅，鹅，鹅，\n曲项向天歌。\n白毛浮绿水，\n红掌拨清波。" },
  { content: "千里莺啼绿映红，\n水村山郭酒旗风。\n南朝四百八十寺，\n多少楼台烟雨中。" },
  { content: "昨夜风开露井桃，\n未央前殿月轮高。\n平阳歌舞新承宠，\n帘外春寒赐锦袍。" },
  { content: "独在异乡为异客，\n每逢佳节倍思亲。\n遥知兄弟登高处，\n遍插茱萸少一人。" },
  { content: "风烟俱净，\n天山共色。\n从流飘荡，\n任意东西。" },
  { content: "李白乘舟将欲行，\n忽闻岸上踏歌声。\n桃花潭水深千尺，\n不及汪伦送我情。" }
];

const manifestText = `<h2>「一期一会」的宗旨</h2>
<p>"一期一会"源自日本茶道美学：一期一会（いちご いちえ），意为"此一时，彼一时"。在一生中可能只有一次的相逢里，要珍视每一个瞬间。</p>

<h3>为什么这样设计？</h3>
<p>当今网络世界，我们已被刷屏的习惯淹没——打开一个平台，就陷入无终止的滚动，一个接一个，永不停歇。等待我们的是，忙碌却空虚，消费却无获。</p>

<p>这个网站的设计刻意反抗这种习惯：</p>

<ul>
<li><strong>一次一首</strong> — 打开网站，你会看到一首诗。只有一首。</li>
<li><strong>无下一页</strong> — 没有重复查看的快捷方式。想再看，你需要离开这个网站。</li>
<li><strong>给予冥思</strong> — 一首诗，足够让你停留、思考、品味。</li>
</ul>

<p>你可以关闭网页，喝杯茶，或看向窗外。下次再来时，又是一次新的邂逅。</p>

<p>这就是"不期而会"——没有期待，只有偶遇。就像在街角遇见一个故人，或在雨中收到一封信。</p>`;

// 显示随机诗词
function displayRandomPoem() {
    if (poems.length === 0) return;

    const randomIndex = Math.floor(Math.random() * poems.length);
    const poem = poems[randomIndex];

    const contentElement = document.getElementById('poemContent');
    contentElement.textContent = poem.content;
}

// 处理按钮点击 - 显示提示对话框
function handleButtonClick() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `<p style="text-align: center; font-size: 1.2rem; color: #5a7a52; margin-bottom: 30px;">不期而会，后会有期</p>
    <p style="text-align: center; color: #7a8a72;">想了解这个网站的设计理念吗？<br><a href="#" id="learnMore" style="color: #6BA86B; text-decoration: none; border-bottom: 1px solid #6BA86B; cursor: pointer;">点击了解「一期一会」的宗旨</a></p>`;
    
    modal.style.display = 'block';
    
    // 绑定"了解更多"链接的点击事件
    document.getElementById('learnMore').addEventListener('click', function(e) {
        e.preventDefault();
        modalBody.innerHTML = manifestText + `<div style="text-align: center; margin-top: 30px;"><button id="closeBtn" class="btn-close">关闭</button></div>`;
        document.getElementById('closeBtn').addEventListener('click', closeModal);
    });
}

// 关闭模态框
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 绑定按钮点击事件
document.getElementById('btnRandom').addEventListener('click', handleButtonClick);

// 绑定关闭按钮点击事件
document.getElementById('btnClose').addEventListener('click', function() {
    window.close();
});

// 绑定模态框关闭按钮
document.getElementById('modalClose').addEventListener('click', closeModal);

// 点击模态框外部关闭
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
});

// 页面加载完成后初始化 - 只在第一次加载时显示一首诗
document.addEventListener('DOMContentLoaded', displayRandomPoem);
