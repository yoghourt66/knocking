(function(){
	keyboardMap={ //硬件虚拟键码:键盘序号
	192:0,
	49:1,
	50:2,
	51:3,
	52:4,
	53:5,
	54:6,
	55:7,
	56:8,
	57:9,
	48:10,
	173:11,
	61:12,
	8:13,
	9:14,
	81:15,
	87:16,
	69:17,
	82:18,
	84:19,
	89:20,
	85:21,
	73:22,
	79:23,
	80:24,
	219:25,
	221:26,
	220:27,
	20:28,
	65:29,
	83:30,
	68:31,
	70:32,
	71:33,
	72:34,
	74:35,
	75:36,
	76:37,
	59:38,
	222:39,
	13:40,
	16:41,
	90:42,
	88:43,
	67:44,
	86:45,
	66:46,
	78:47,
	77:48,
	188:49,
	190:50,
	191:51,
	16:52,
	17:54,
	18:55,
	91:56, //苹果cmd键码？改为应用程序键93？
	32:57,
	18:58,
	17:59,
	37:60,
	38:61,
	40:62,
	39:63
};

keyboardKeys={ //键盘序号:键盘显示字符
	0:["&sim;","`"],
	1:["!","1"],
	2:["@","2"],
	3:["#","3"],
	4:["$","4"],
	5:["%","5"],
	6:["^","6"],
	7:["&","7"],
	8:["*","8"],
	9:["(","9"],
	10:[")","0"],
	11:["_","-"],
	12:["+","="],
	13:["Backspace","&larr; &nbsp;"],
	14:["&nbsp; Tab"],	//
	15:["Q"],
	16:["W"],
	17:["E"],
	18:["R"],
	19:["T"],
	20:["Y"],
	21:["U"],
	22:["I"],
	23:["O"],
	24:["P"],
	25:["{","["],
	26:["}","]"],
	27:["|","\\"],
	28:["&nbsp; Caps Lock","&nbsp; &bull;"],
	29:["A"],
	30:["S"],
	31:["D"],
	32:["F"],
	33:["G"],
	34:["H"],
	35:["J"],
	36:["K"],
	37:["L"],
	38:[":",";"],
	39:["\"","'"],
	40:["Enter &nbsp;","&crarr; &nbsp;"],
	41:["&nbsp; Shift"],
	42:["Z"],
	43:["X"],
	44:["C"],
	45:["V"],
	46:["B"],
	47:["N"],
	48:["M"],
	49:["<",","],
	50:[">","."],
	51:["?","/"],
	52:["Shift &nbsp;"],
	53:["Fn"],
	54:["Ctrl"],
	55:["Alt"],
	56:["cmd"],
	58:["Alt"],
	59:["Ctrl"],
	60:["&#9664;"],
	61:["&#9650;"],
	62:["&#9660;"],
	63:["&#9658;"]
};

 word = {
 	a:[["adamant","a.不动摇的"],["adore","vt.崇拜"],["adorn","vt.装饰"],["advance","n.进展"],["advisory","a.咨询的"],["automatically","ad.自然而然地"],["catastrophe","n.大祸"],["dramatic","a.扣人心弦的"],["dramatically","ad.戏剧性地"],["partial","a.部分的"]],
 	b:[["bonus","n. 奖金.红利"],["lobby","n.前厅"],["shabby","a.褴褛的;破旧的"],["stubborn","a.顽固的;顽强的"],["subscribe","vi.订购.预订"],["inhibit","vt.禁止.抑制"],["bamboo","n.竹;竹杆"],["blaze","vi.燃烧"],["bribe","n.贿赂"],["brood","vt.沉思"]],
 	c:[["accomplishment"," n.成就"],["characteristic","n.特征"],["occasion","vt.引起"],["concede","vi.让步"],["concise","a.简洁的.简明的"],["tactics","n.策略"],["successor","n.继承人.继任者"],["crouch","vi.蹲下.蹲伏"],["accusation","n.罪名，谴责"],["accumulate","vt.积累，累积"]],
 	d:[["dangle","vi.摇摇晃晃"],["deduce","vt.推断"],["forbidding","a.令人生畏的"],["goddess","n.女神"],["wounded","a.受伤的"],["denote","vt.指示.意味着"],["redundant","a.多余的.冗长的"],["muddy","a.多泥的.泥泞的"],["legend","n.传说.传奇"],["induce","vt.劝诱"]],
 	e:[["agreeable","a.宜人的"],["be glued to","vt.盯着"],["bewildering","a.令人无所适从的"],["bewilderment","n.为难"],["discreetly","ad.谨慎地"],["compensate","vt.补偿"],["creep","vi.蹑手蹑脚地走动"],["deliberately ","ad.故意地"],["dense","a.稠密的"],["departure","n.离开"]],
 	f:[["effortlessly","a.不费力地"],["faithfully","ad.诚恳地"],["suffering","n.痛苦"],["affiliate","vt. 附属.接纳"],["fracture","n.破裂;裂痕"],["fraud","n.骗子.欺诈"],["offensive","a.冒犯的;进攻的"],["offset","n.分支 vt.抵销"],["diffuse","a.散开的.弥漫的"],["afflict","vt.使苦恼"]],
 	g:[["courage","n.勇气"],["glare","vi.怒目注视"],["luggage","n.行李"],["negligence","n.粗心大意"],["regard","vt.看待"],["straggling","a.散乱的"],["gasp","vi.气喘.喘息"],["gorgeous","a.绚丽的;极好的"],["gossip","n.闲谈;碎嘴子"],["grim","a.冷酷无情的"]],
 	h:[["high-handed","a.专横的"],["hypnotize","vt.使入迷"],["hamper","vt.妨碍.阻碍"],["heal","vt.治愈;使和解"],["heritage","n.遗产.继承物.传统"],["hitherto","ad.迄今.到目前为止"],["withhold"," vt.拒绝.阻挡"],["haunt","vt.常去"],["hover","vi.徘徊;傍徨"],["hypothesis","n.假设;前提"]], 
 	i:[["agonizing","a.使人坐卧不安的"],["destination","n.目的地"],["dignity","n.尊严"],["disappointing","a.令人失望的"],["distinguished","a.杰出的，著名的"],["fascination","n.魅力"],["invisible","a.无形的"],["primitive","a.原始的"],["disguise","vi.隐瞒.掩埋"],["impart"," vt.给予.传递"]],
 	j:[["judge","n.法官"],["junction","n.连接"],["jerk","vt.猛地一拉"],["subjective","a.主观的"],["rejoice","vi.欣喜.高兴"],["jam","n.堵塞"],["reject","vt.舍弃.抛弃"],["adjust","vt.调整.校正"],["injure","vt.伤害.损害"],["junior","a.年少的 n.晚辈"]],
 	k:[["keen","a.热心的"],["skier","n.滑雪者"],["knit","vi.编织"],["slack","a.松弛的;萧条的"],["skip","vi.跳.略过"],["bleak","a.苍白的.荒凉的"],["evoke","vt.唤起.引起"],["kit","n.工具包"],["knob","n.拉手.旋纽"],["likelihood","n.可能(性)"]],
 	l:[["befall","vt.降临到...(指坏事)"],["brilliantly","ad.灿烂地"],["equally","ad.同样"],["legend","n.传说.传奇"],["lick","vt.舔;舔吃"],["linger","vi.逗留.徘徊;拖延"],["thrill","vt.&vi.(使)激动"],["wallet","n.钱包"],["yell","vi.叫喊"],["poll","n.投票 vi.投票"]],
 	m:[["comment","vi.评论"],["hammer","vi.锤击"],["commentary","n. 注释.评论.批评"],["commitment","n. 委托.实行"],["momentum","n. 动力.要素"],["mock","vt.嘲弄.挖苦"],["summon","vt.召唤;鼓起(勇气)"],["symptom","n.症状.征兆"],["symposium","n.酒会.座谈会"],["temperament","n.气质.性情"]],
 	n:[["confidently","ad.自信地"],["contented","a.心满意足的"],["earn","vt.挣得"],["ignorance","n.无知"],["ingenuity","n.机灵"],["sunken","a.沉没的"],["transition","n.转变.过渡"],["transplant","vt.&vi.移植.移种"],["unanimous"," a.(全体)一致的"],["turnover","n.成交量"]],
 	o:[["anonymous","a.匿名的"],["apologize","vi.道歉"],["composure","n.镇静"],["monotonous","a.单调的"],["overthrow","vt.推翻"],["poison","n.毒药"],["provocation","n.惹怒"],["monopoly","n.垄断.独占"],["odor","n.气味.名声"],["oath","n.誓言.誓约"]],
 	p:[["appoint","vt.任命"],["deception","n.欺骗"],["pipe","n.管道"],["pour","vt.倾注"],["praise","n.赞美"],["pride","vt.骄傲"],["prompt","vt.怂恿"],["propose","vt.打算"],["supply","n.供给"],[" oppress","vt.压迫.压制"]],
 	q:[["sequence","n.序列"],["queer","a.奇怪的.古怪的"],["quotation","n.引用"],["queen","n.王后.女王"],["require","vt.需要.命令"],["sequence","n.连续.次序"],["square","n.正方形.广场"],["unique","a.唯一的"],["qualify","v.(使)胜任"],["quit","v.停止.放弃"]], 
 	r:[["burriedly","ad.急忙地"],["disregard","vt.漠视，无视"],["ferry","vt.渡运"],["lord","n.勋爵"],["narrow","a.狭窄的"],["rapture","n.欣喜若狂"],["record","n.档案"],["refinement","n.高雅"],["superior","a.优越的"],["terrifying","a.使人害怕的"]],
 	s:[["closeness","n.接近"],["disaster","n.灾难"],["dismiss","vt.解雇"],["fussy","a.大惊小怪的"],["permission","n.允许"],["seek","vt.寻求"],["starve","vi.饥饿"],["suspend","vt.悬挂"],["toss","vt.扔"],["consensus","n. 一致"]], 
 	t:[["clutter","n.杂七杂八的东西"],["contempt","n.轻视"],["distasteful","a.讨厌的"],["settle","vi.安身"],["statement","n.陈述"],["status","n.地位"],["stoutly","ad.断然"],["taunt","n.嘲笑"],["tedious","a.乏味的"],["admittedly","ad.公认地"]], 
 	u:[["delusion","n.幻想"],["graceful","a.优美的"],["mud","n.泥"],["undertake","vt.着手做，进行"],["unduly","ad.过度地"],["ensue","vt. 追求"],["multitude","n.大批;大量"],["murmur","vi.低声而言 n.低语"],["muscular","a.强健的"],["pursuit","n.追赶;追求"]], 
 	v:[["envious","a.嫉妒的"],["grievance","n.不平，不满"],["involve","vt.牵涉"],["previous","a.以前的"],["sleeve","n.袖子"],["survive","vi.存活"],["verify","vt.查证，核实"],["evoke","vt. 唤起.引起"],["overt","a.明显的.公然的"],["quiver","vi.(轻微地)颤动"]], 
 	w:[["wisdom","n.智慧"],["withdraw","vt.取回"],["ward","n.病房"],["wedge","vt.挤入"],["warrant","n.许可证.委任状"],["wither","vi.枯萎"],["witty","a.机智的.风趣的"],["woe","n.悲痛.苦恼"],["wrath","n.暴怒.狂怒.愤慨"],["wrinkle","n.皱纹"]], 
 	x:[["anxiety","n.忧虑，担忧"],["reward","vt.奖赏；报偿"],[" pretext","n.借口.托辞"],["texture","n.质地.纹理"],["exempt","vt.使免除.豁免"],["exotic","a.异国的.外来的"],["explicit","a.明晰的.直率的"],["extravagant","a.奢侈的.过度的"],["perplex","vt.困惑.难住"],[" extinct","a.绝种的"]], 
 	y:[["sympathy","n.同情"],["yoke","n.枷锁"],["yearn","vi.想念.怀念.向往"],["obey","vt.顺从 vi.服从"],["obviously","ad.明显地.显然地"],["occasionally","ad.偶然;非经常地"],["occupy","vt.占领.占有"],["ability","n.能力"],["absolutely","ad.完全地.绝对地"],["accompany","vt.陪伴.陪同"]], 
 	z:[["puzzle","vt.使迷惑"],["stabilize","vi.稳定.安定"],["citizen","n.公民.市民"],["amaze","vt.使惊奇"],["breeze","n.微风"],["freeze","vi.冻.结冻"],["gaze","vi.凝视.盯.注视"],["puzzle","n.难题.谜"],["quiz","n.测验"],["zeal","n.热心.热忱"]]
 }

 paragraph = {
	0:["Everything happens for a reason.","这个世界，没有偶然。"],
	1:["All things are difficult before they are easy.","凡事必先难后易。"],
	2:["Don't be discouraged, it's often the last key in the bunch that opens the lock.","别灰心，往往是最后一把钥匙才能打开锁。"],
	3:["Whatever is worth doing is worth doing well.","任何值得做的，就把它做好。"],
	4:["Nothing is impossible to a willing heart.","心之所愿，无事不成。"],
	5:["There is no royal road to learning.","求知无坦途。"],
	6:["Happiness is a way station between too much and too little.","幸福是太多和太少之间的一站。"],
	7:["The first blow is half the battle.","良好的开端是成功的一半。"],
	8:["The good seaman is known in bad weather."," 惊涛骇浪，方显英雄本色。"],
	9:["Gods determine what you're going to be.","人生的奋斗目标决定你将成为怎样的人。"],
	10:["Pain past is pleasure.","忍过痛苦即得快乐。"]
}

 /*code = {
 	0:["function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        
                var temp = arr[j+1];        
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}","冒泡排序"],
 	1:["function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {    
                minIndex = j;                
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}","选择排序"],
 	2:["function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}","插入排序"],
 	3:["function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {        
        gap =gap*3+1;
    }
    for (gap; gap> 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}","希尔排序"],
 	4:["function mergeSort(arr) {  
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length>0 && right.length>0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}","归并排序"],
 	5:["function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {    
    var pivot = left,                      
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}","快速排序"],

 }*/


	panel = -($('.content').offset().top)/(document.body.offsetHeight) + 1;
	current = "panel-" + String(panel);//用来控制当前页面keydown事件

	stateP1 = 1,stateP2 = 1,stateP3 = 1,stateP4 = 1; //面板状态：1为未加载过 2为已加载 3为保存
	who = 0;
	document.getElementById('control-1').addEventListener('click',function(){
		current = "panel-1";
	});
	document.getElementById('control-2').addEventListener('click',function(){
		current = "panel-2";
		onloadPanel(current);
	});
	document.getElementById('control-3').addEventListener('click',function(){
		current = "panel-3";
		onloadPanel(current);
	});
	document.getElementById('control-4').addEventListener('click',function(){
		current = "panel-4";
	});

	// onloadPanel();
	onloadPanel('panel-1');
	onloadPanel('panel-2');
	onloadPanel('panel-3');
	onloadPanel('panel-4');


})();



function onloadPanel(panel){ //onload(current)根据当前页面加载、状态保存
	//onloadAllModules
	if(panel=='panel-1'){
		if(stateP1 == 1){
			onloadKeyboard(panel);
			onloadKeyboardChar(panel);
			stateP1 = 2;

			onloadGlobule(panel);
		}
	}
	if(panel=='panel-2'){
		if(stateP2 == 1){

			onloadKeyboard(panel);
			onloadKeyboardChar(panel);
			stateP2 = 2;

			onloadMagicCard(panel);
		}
	}
	if(panel=='panel-3'){
		if(stateP3 == 1){

			onloadKeyboard(panel);
			onloadKeyboardChar(panel);
			stateP3 = 2;

			onloadArtical(panel);
		}
	}
	if(panel=='panel-4'){
		if(stateP4 == 1){
			stateP4 = 2;

			/*onloadText(panel);*/
		}
	}
}

function onloadKeyboard(key){ //加载每个键盘元素
	//css中定义keyboard div 的位置	
	var nodeUl = document.createElement('ul');
	for(var i=0; i<64; i++){
		var nodeLi = document.createElement('li');
		var nodeText = document.createElement('div');
		nodeText.className = 'text';
		var nodeFinger = document.createElement('div');
		nodeFinger.className = 'finger';
		nodeLi.appendChild(nodeText);
		nodeLi.appendChild(nodeFinger);
		if( i>=53 && i<60 ){
			nodeLi.className = 'lastl';
		}
		if( i>=60 && i<64 ){
			nodeLi.className = 'direction';
			if( i != 61){
				nodeLi.className += ' under';
			}
		}
		nodeUl.appendChild(nodeLi);
	}
	$('#'+key+'>.keyboard').append(nodeUl);
}

function onloadKeyboardChar(key){ //加载键盘上显示的字符
	$('#'+key+'>.keyboard>ul>li').each(function(i){	
  		if(keyboardKeys[i]){
  			if(keyboardKeys[i].length > 1){
  				var string = "";
  				for(var j=0; j<keyboardKeys[i].length; j++){
  					string += keyboardKeys[i][j]+"<br>";
  				}
  				$(".text", this).html(string);
  			}
  			else{
  				$(".text", this).html(keyboardKeys[i][0]);
  			}
  		}	
  	});
}

document.addEventListener("keypress",function(e){
	if(current=='panel-1'){
		if((e.charCode>=97) && (e.charCode<=122)){/*alert(e.charCode);*/
			who = e.charCode;
		}
	}
	if(current=='panel-2'){
		//magiccard效果
		/*alert('press:'+String.fromCharCode(e.charCode)+'currentItem:'+$('#English>span.currentItem').html());*/
		if(String.fromCharCode(e.charCode) == $('#English>span.currentItem').html()){
			$('#English>span.currentItem').addClass("textInput_right");
			$('#English>span.currentItem').next().addClass("currentItem");
			$('#English>span.currentItem').eq(0).removeClass("currentItem");
		}else{
			$('#English>span.currentItem').addClass("textInput_error");
		}

		if($('#English>span.currentItem').html() == null){/*alert('null');*/
			//可在清空前根据textInput_error统计错误！
			var obj = document.getElementById('word');
			obj.style.transition="-webkit-transform 0.5s ease-in-out";
			obj.style.webkitTransform="rotateY(180deg)";

			/*alert('deg:'+obj.style.transform);*/
			$('#panel-2>#magicCard>#word>#English').empty();
			$('#panel-2>#magicCard>#word>#translate').empty();

			newWord = [];
			
			/*clearTimeout(clear);*/
			var init = setTimeout(function(){
				obj.style.transition="-webkit-transform 0s ease-out";
				/*alert('time:'+obj.style.transition);*/
				obj.style.webkitTransform="rotateY(0deg)";
			},500);

			var show = setTimeout(function(){
				onloadText('panel-2');
			},530);
			
		}
	}
	if(current=='panel-3'){
		//artical效果
		if(String.fromCharCode(e.charCode) == $('#artical>span.currentItem').html()){
			$('#artical>span.currentItem').addClass("textInput_right");
			$('#artical>span.currentItem').next().addClass("currentItem");
			$('#artical>span.currentItem').eq(0).removeClass("currentItem");
		}else{
			$('#artical>span.currentItem').addClass("textInput_error");
		}

		if($('#artical>span.currentItem').html() == null){
			//可在清空前根据textInput_error统计错误！
			$('#panel-3>#notebook>#artical').empty();
			newString = [];
			var show = setTimeout(function(){
				onloadText('panel-3');
			},200);
			
		}
	}

});

document.addEventListener("keydown",function(e){
	if(e.shiftKey && e.keyCode == 16){
        if(e.location == 1){
        	//left
        	keyDownAni(current,41,e);
        }
        else if(e.location == 2){
        	//right
        	keyDownAni(current,52,e);
        }
    }else if (e.ctrlKey && e.keyCode ==17) {
    	if(e.location == 1){
    		//left
    		keyDownAni(current,54,e);
    	}
    	else if(e.location == 2){
    		//right
    		keyDownAni(current,59,e);
    	}
    }
    else if(e.altKey && e.keyCode == 18){
    	if(e.location == 1){
        	//left
        	keyDownAni(current,55,e);
      	}
        else if(e.location == 2){
        	//right
        	keyDownAni(current,58,e);
        }
    }
    else{	
        keyDownAni(current,keyboardMap[e.keyCode],e);
    }
});

function keyDownAni(current,eq,e){ //按键动效
	$('#'+current+'>.keyboard>ul>li').eq(eq).addClass("activeKey");
	$('#'+current+'>.keyboard>ul>li').eq(eq).children(".finger").animate(
		{opacity:"1"},50,function(){
			$(this).animate(
				{opacity:"0"},
				200,
				function(){
					$('#'+current+'>.keyboard>ul>li').eq(eq).removeClass("activeKey");
				});
		});
}



function onloadGlobule(panel){
	//存储所有泡泡对象数组设置
	var bubbles = new Array();
	var wrong = new Array();
	var Nb = 0;
	var Nw = 0;

	var lastRoad = $('#'+panel+'>#backdrop').height()*0.1;

	//背景画布基本信息
	var base = {
		width : $('#'+panel+'>#backdrop').width(),
		height : $('#'+panel+'>#backdrop').height()
	};

	//所有图片共同信息，除src不同，其他均相同
	var imgInfo = {
		width : 30,
		height : 30,
		opacity : 1
	};



	//泡泡构造器//base,imgInfo
	function Bubble(Nb){
		//创建泡泡html元素及基本属性设置
		var div = document.createElement('div');
		var img = document.createElement('img');
		img.src = './t01053ab4d4d6510abd.png';	//可改成随机
		var text = document.createElement('div');	
		var character = String.fromCharCode(Math.floor(Math.random()*26)+97);
		var textNode = document.createTextNode(character);
		div.appendChild(img);
		text.appendChild(textNode);
		div.appendChild(text);
		this.obj = div;	
		$('#'+panel+'>#backdrop').append(this.obj);

		this.obj.width = imgInfo.width - 10;		//根据图片获取宽度
		this.obj.height = imgInfo.height - 10;	//根据图片获取高度
		this.obj.firstChild.width = this.obj.width;
		this.obj.firstChild.height = this.obj.height;
		this.obj.firstChild.style.opacity = imgInfo.opacity;
		this.obj.style.position = 'absolute';
		this.obj.style.left = base.width/2 - (imgInfo.width-10)/2 + 'px';
		this.obj.style.top = base.height - (imgInfo.height-10) +'px';
		
		this.Nb = Nb;	//方便在数组中查询序号
		this.character = character;
		this.ranX = Number(String((Math.random()*5 -2.5)/2).match(/^-?\d+\.\d{0,2}|^\d+$/));	//决定以后泡泡漂移方向及位移

	}

	Bubble.prototype.mov = function(){
		ranX = this.ranX;
		x = Number(this.obj.style.left.toString().match(/^[0-9]+/ig));
		y = Number(this.obj.style.top.toString().match(/^[0-9]+/ig));
		opacity = this.obj.firstChild.style.opacity;
		width = this.obj.width;
		height = this.obj.height;
			/*alert('ranX:'+ranX+',x:'+x+',y:'+y+',opacity:'+opacity+',width:'+width+',height:'+height);*/

		//加入边界判断和覆盖判断
			if(y < lastRoad){	//泡泡在10%以上
				if(Math.random() > 0.5){	//位置:上移变慢
					x += ranX/2;
				}
				
				if(y >= lastRoad/2){
					y -= 2;	
					opacity = 0.2;	
					this.obj.firstChild.style.opacity = opacity;
				}else if(y > -imgInfo/4){
					y -= 2;	
					opacity = 0;
					this.obj.firstChild.style.opacity = opacity;
				}else{
					//重飘
					this.x = base.width/2 - (imgInfo.width-10)/2;
					this.y = base.height - (imgInfo.height-10);
					this.ranX =  Number(String((Math.random()*5 -2.5)/2).match(/^-?\d+\.\d{0,2}|^\d+$/));
					this.obj.width = imgInfo.width - 10;		
					this.obj.height = imgInfo.height - 10;	
					this.obj.style.left = this.x + 'px';
					this.obj.style.top = this.y + 'px';
					this.obj.firstChild.width = this.obj.width;
					this.obj.firstChild.height = this.obj.height;
					this.obj.firstChild.style.opacity = imgInfo.opacity;

					return 0;
				}

			}else if(y > lastRoad && y < lastRoad*3){	//泡泡在10%~30%间
				x += ranX/2;
				y -= 3;
			}else{	//泡泡在30%以下
				if(y>lastRoad*2){
					x += ranX*4;	
				}else{
					x += ranX;
				}
				y -= 3.5;
			}

			if(width < imgInfo.width){	//泡泡大小变化
				width += 1;
				height += 1;
				this.obj.width = width;
				this.obj.height = height;
				this.obj.firstChild.width = this.obj.width;
				this.obj.firstChild.height = this.obj.height;
			}
			
			x = x.toString().match(/^-?\d+\.\d{0,2}|^\d+$/);
			y = y.toString().match(/^-?\d+\.\d{0,2}|^\d+$/);
			/*alert("x:"+x+"px,y:"+y+"px");*/
			this.obj.style.left = x + 'px';
			this.obj.style.top = y + 'px';
	};

	Bubble.prototype.ani = function(){
		this.obj.remove();
	}



	//控制器：控制泡泡生成、移动、消灭，结合外界事件

	var newBubble = setInterval(function(){
		if(Nb< 4){
			bubbles.push(new Bubble(Nb));
			Nb++;
		}
	},200);

	var bubbleMov = setInterval(function(){
		/*if(){

		}*/

		bubbles = bubbles.filter(function(item,i){	//回调函数的参数已给出
			//比较bubbles数组，有相同的删除数组元素,再new bubble
			if(String.fromCharCode(who) == item.character){	/*alert('who:'+String.fromCharCode(who));*/
				/*alert(Number(item.obj.style.top.match(/^-?\d+\.\d{0,2}|^\d+/)));*/
				if(item.obj.firstChild.style.opacity > 0.2){
					item.obj.firstChild.src = './burst.png';	
					
					item.obj.style.webkitTransform = 'scale(1.5,1.5)';
					item.obj.style.transition = '-webkit-transform 0.2s ease-in-out'

					//可加入已按对次数
					setTimeout(function(){
						item.ani();
					},200);
					who = 0;
					Nb--;	//注释掉可观察按对泡泡销毁情况
					return false;
				}else{
					who = 0;
					item.mov();
					return true;

					/*Nb--;
					wrong = push(item);	//将没有按的当做错误的处理
					Nw++;
					return false;*/
				}
				
			}else{
				/*if(item.obj.firstChild.style.opacity < 0.2){
					Nb--;
					wrong = push(item);	//将没有按的当做错误的处理
					Nw++;
					return false;
				}*/
				if(i == Nb){
					who = 0;
				}
				item.mov();
				return true;
			}
		});
	},40);
}


function onloadMagicCard(panel){
	onloadText(panel);

	
}

function onloadArtical(panel){
	onloadText(panel);
	

}

function onloadText(panel){
	if(panel == 'panel-2'){
		var letter = String.fromCharCode(Math.floor(Math.random()*25+97));
		var order = Math.floor(Math.random()*10);
		var newWord = word[letter][order][0];
		var translate = word[letter][order][1];

		for(var i=0; i<newWord.length; i++){
			var newChar = newWord[i];
			var node = document.createElement("span");
			var textnode = document.createTextNode(newChar);
			node.appendChild(textnode);
			$('#'+panel+'>#magicCard>#word>#English').append(node);
		}

		//加载中文翻译
		$('#'+panel+'>#magicCard>#word>#English>span').eq(0).addClass("currentItem");
		$('#'+panel+'>#magicCard>#word>#translate').html(translate);
	}

	if(panel == 'panel-3'){
		var seed = Math.floor(Math.random()*10);	
		var newString = paragraph[seed][0];
		
		for(var i=0; i<newString.length; i++){
			var newChar = newString[i];
			var node = document.createElement("span");
			var textnode = document.createTextNode(newChar);
			node.appendChild(textnode);
			$('#'+panel+'>#notebook>#artical').append(node);
		}

		//初始化第一个字母效果
		$('#'+panel+'>#notebook>#artical>span').eq(0).addClass("currentItem");
	}

	if(panel == 'panel-4'){
		var seed = Math.floor(Math.random()*10);
		var newCode = code[seed];

		for(var i=0; i<newCode.length; i++){
			var newChar = newCode[i];
			var node = document.createElement("span");

			if(newCode[i] == '\n'){
				newChar.style.display = 'block';
			}

			var textnode = document.createTextNode(newChar);
			node.appendChild(textnode);
			$('#'+panel+'>#window>#screenl').append(node);
		}

		//初始化第一个字母效果
		$('#'+panel+'>#window>#screen>span').eq(0).addClass("currentItem");
	}
}
