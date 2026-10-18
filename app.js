
function addTask() {
  const input = document.getElementById("task");
  const result = document.getElementById("result");
  const task = input.value.trim();

  if (!task) {
    result.textContent = "اكتبي المهمة أولًا.";
    return;
  }

  result.textContent = "مهمتك اليوم: " + task;
  input.value = "";
}

function dailyAdvice() {
  const advice = [
    "ابدئي بأهم مهمة لمدة 25 دقيقة.",
    "خذي استراحة قصيرة بعد التركيز.",
    "قللي المشتتات أثناء إنجاز مهامك.",
    "اختاري عادة نافعة وداومي عليها."
  ];

  alert(advice[Math.floor(Math.random() * advice.length)]);
}
