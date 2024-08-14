window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //выбираем объект
var antarg = document.querySelector("[data-acc-text='timeline']");

//получаем переменную для слайдера из Сторилайна
var player = GetPlayer();
var sliderPos = player.GetVar("sliderPos");

//переворачиваем значение переменной наоборот
var sliderPosInv = 1 - sliderPos;

//анимируем объект
gsap.set(antarg, {
	x:sliderPosInv,
});
}

};
