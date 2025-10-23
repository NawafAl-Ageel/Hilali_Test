// Gamified Alhilal Fan Challenge System
const challengeCategories = [
  {
    id: "history",
    title: "تاريخ الهلال العريق",
    description: "اختبر معرفتك بتاريخ النادي العريق",
    questions: [
      {
        id: "foundation_year",
        type: "radio",
        label: "في أي عام تأسس نادي الهلال؟",
        required: true,
        options: [
          {value:"1957", label:"1957"},
          {value:"1958", label:"1958"},
          {value:"1959", label:"1959"},
          {value:"1960", label:"1960"}
        ],
        points: 10
      },
      {
        id: "first_championship",
        type: "radio",
        label: "ما هو أول لقب رسمي فاز به الهلال؟",
        required: true,
        options: [
          {value:"king_cup_1961", label:"كأس الملك 1961"},
          {value:"league_1977", label:"الدوري السعودي 1977"},
          {value:"crown_prince_1964", label:"كأس ولي العهد 1964"},
          {value:"federation_cup_1975", label:"كأس الاتحاد 1975"}
        ],
        points: 15
      },
      {
        id: "thiago_neves_goal",
        type: "video",
        label: "مين سجل هذا الهدف؟",
        required: true,
        video: "videos/Thiago_Neves_Goal.mp4",
        options: [
          {value:"savic", label:"سافيتش"},
          {value:"al_breik", label:"محمد البريك"},
          {value:"thiago_neves", label:"تياغو نيفيز"},
          {value:"yasser_al_qhtani", label:"ياسر القحطاني"}
        ],
        correctAnswer: "thiago_neves",
        points: 20
      },
      {
        id: "stadium_capacity",
        type: "rating",
        label: "كم تبلغ سعة ملعب الأمير محمد بن فهد؟",
        required: true,
        scale: 5,
        labels: ["15,000", "25,000", "35,000", "45,000", "55,000"],
        points: 12
      }
    ]
  },
  {
    id: "players",
    title: "النجوم والأساطير",
    description: "تعرف على نجوم الهلال الحاليين والسابقين",
    questions: [
      {
        id: "current_captain",
        type: "radio",
        label: "من هو قائد الهلال الحالي؟",
        required: true,
        options: [
          {value:"salem_al_dawsari", label:"سالم الدوسري"},
          {value:"yasser_al_shahrani", label:"ياسر الشهراني"},
          {value:"abdullah_al_maliki", label:"عبدالله المالكي"},
          {value:"mohammed_al_owais", label:"محمد العويس"}
        ],
        points: 15
      },
      {
        id: "goal_scorer_video",
        type: "video",
        label: "من سجل هذا الهدف الرائع؟",
        required: true,
        video: "videos/amazing_goal.mp4",
        options: [
          {value:"salem_al_dawsari", label:"سالم الدوسري"},
          {value:"michael", label:"مايكل"},
          {value:"neymar", label:"نيمار"},
          {value:"malcom", label:"مالكوم"}
        ],
        points: 25
      },
      {
        id: "commentary_audio",
        type: "audio",
        label: "في أي مباراة كان هذا التعليق؟",
        required: true,
        audio: "audio/famous_commentary.mp3",
        options: [
          {value:"alhilal_vs_ittihad_2019", label:"الهلال × الاتحاد 2019"},
          {value:"alhilal_vs_nassr_2020", label:"الهلال × النصر 2020"},
          {value:"alhilal_vs_shabab_2021", label:"الهلال × الشباب 2021"},
          {value:"alhilal_vs_ahli_2022", label:"الهلال × الأهلي 2022"}
        ],
        points: 30
      },
      {
        id: "trophies_count",
        type: "rating",
        label: "كم عدد البطولات الرسمية للهلال؟",
        required: true,
        scale: 5,
        labels: ["50+", "60+", "70+", "80+", "90+"],
        points: 18
      }
    ]
  },
  {
    id: "achievements",
    title: "الإنجازات والبطولات",
    description: "تحدي معرفتك بإنجازات الهلال المحلية والقارية",
    questions: [
      {
        id: "asian_championships",
        type: "checkbox",
        label: "ما هي البطولات الآسيوية التي فاز بها الهلال؟",
        required: true,
        options: [
          {value:"acl_2019", label:"دوري أبطال آسيا 2019"},
          {value:"acl_2021", label:"دوري أبطال آسيا 2021"},
          {value:"acl_2022", label:"دوري أبطال آسيا 2022"},
          {value:"acl_2023", label:"دوري أبطال آسيا 2023"},
          {value:"acl_2024", label:"دوري أبطال آسيا 2024"}
        ],
        points: 20
      },
      {
        id: "famous_quote",
        type: "textarea",
        label: "اكتب أشهر مقولة في تاريخ الهلال",
        required: true,
        placeholder: "اكتب المقولة هنا...",
        points: 15
      },
      {
        id: "stadium_name",
        type: "text",
        label: "ما هو اسم الملعب الرسمي للهلال؟",
        required: true,
        placeholder: "اسم الملعب",
        points: 10
      },
      {
        id: "consent",
        type: "checkbox-single",
        label: "أوافق على مشاركة نتائجي في لوحة المتصدرين",
        required: true,
        points: 5
      }
    ]
  }
];

// Gamification System
let currentStep = 0;
let currentQuestion = 0;
let totalQuestions = 0;
let challengeData = {};
let userStats = {
  points: 0,
  level: 1,
  streak: 0,
  achievements: []
};

// Calculate total questions
challengeCategories.forEach(category => {
  totalQuestions += category.questions.length;
});

// DOM Elements
const root = document.getElementById("formRoot");
const form = document.getElementById("surveyForm");
const toast = document.getElementById("toast");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const currentStepEl = document.getElementById("currentStep");
const totalStepsEl = document.getElementById("totalSteps");
const progressFill = document.getElementById("progressFill");
const progressSteps = document.getElementById("progressSteps");

// Gamification Elements
const currentPointsEl = document.getElementById("currentPoints");
const currentLevelEl = document.getElementById("currentLevel");
const streakEl = document.getElementById("streak");

function el(tag, attrs={}, ...children){
  const n = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==="class") n.className=v;
    else if(k==="for") n.htmlFor=v;
    else if(k==="dataset") Object.assign(n.dataset,v);
    else if(k in n) n[k]=v; else n.setAttribute(k,v);
  });
  children.forEach(c=> n.append(c));
  return n;
}

function fieldWrap(id, label, required, points = 0){
  const wrap = el("div", {class:"field"});
  if(label){
    const labelEl = el("label", {class:"field__label", for:id}, label);
    if(required) labelEl.append(el("span",{class:"muted"}, " *"));
    if(points > 0) labelEl.append(el("span",{class:"points-badge"}, `+${points} نقطة`));
    wrap.append(labelEl);
  }
  return wrap;
}

function renderQuestion(q) {
  let w = fieldWrap(q.id, q.type==="checkbox-single" ? "" : q.label, q.required, q.points);

  if(q.type==="text"){
    const inp = el("input",{id:q.id,name:q.id, class:"input", type:"text", required:q.required||false, placeholder:q.placeholder||""});
    if(q.pattern) inp.pattern=q.pattern;
    if(q.inputmode) inp.inputMode=q.inputmode;
    w.append(inp);
  }

  if(q.type==="textarea"){
    const ta = el("textarea",{id:q.id,name:q.id, required:q.required||false, placeholder:q.placeholder||""});
    w.append(ta);
  }

  if(q.type==="select"){
    const sel = el("select",{id:q.id,name:q.id, required:q.required||false});
    sel.append(el("option",{value:""}, q.placeholder||"—"));
    (q.options||[]).forEach(o=> sel.append(el("option",{value:o.value}, o.label)));
    w.append(sel);
  }

  if(q.type==="radio"){
    const list = el("div",{class:"choice-list"});
    (q.options||[]).forEach((o,i)=>{
      const id = `${q.id}_${i}`;
      const item = el("label",{class:"choice", for:id});
      const input = el("input",{type:"radio", id, name:q.id, value:o.value, required:q.required||false});
      const txt = document.createTextNode(o.label);
      item.prepend(input);
      item.append(txt);
      list.append(item);
    });
    w.append(list);
  }

  if(q.type==="checkbox"){
    const list = el("div",{class:"choice-list"});
    (q.options||[]).forEach((o,i)=>{
      const id = `${q.id}_${i}`;
      const item = el("label",{class:"choice", for:id});
      const input = el("input",{type:"checkbox", id, name:`${q.id}[]`, value:o.value});
      const txt = document.createTextNode(o.label);
      item.prepend(input);
      item.append(txt);
      list.append(item);
    });
    w.append(list);
  }

  if(q.type==="checkbox-single"){
    const id = `${q.id}_single`;
    const item = el("label",{class:"choice", for:id});
    const input = el("input",{type:"checkbox", id, name:q.id, required:q.required||false});
    const txt = document.createTextNode(q.label);
    item.prepend(input);
    item.append(txt);
    w.append(item);
  }

  if(q.type==="rating"){
    const group = el("div",{class:"rating"});
    const scale = q.scale||5;
    for(let i=1;i<=scale;i++){
      const id = `${q.id}_${i}`;
      const input = el("input",{type:"radio", id, name:q.id, value:String(i), required:q.required||false});
      const label = el("label",{for:id}, q.labels?.[i-1] || String(i));
      group.append(input,label);
    }
    w.append(group);
  }

  // Video Question
  if(q.type==="video"){
    const videoContainer = el("div", {class:"question-video"});
    
    // Add video title
    const videoTitle = el("h4", {style:"margin-bottom:16px; font-size:18px; font-weight:600; color:var(--text);"}, "شاهد الفيديو:");
    videoContainer.append(videoTitle);
    
    // Create video element
    const video = el("video", {
      controls: true,
      width: "100%",
      height: "300",
      autoplay: true,
      loop: true,
      muted: true,
      style: "border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.15);"
    });
    
    // Set video source
    video.src = q.video;
    video.setAttribute("preload", "metadata");
    
    videoContainer.append(video);
    
    // Add options below video
    const list = el("div",{class:"choice-list"});
    (q.options||[]).forEach((o,i)=>{
      const id = `${q.id}_${i}`;
      const item = el("label",{class:"choice", for:id});
      const input = el("input",{type:"radio", id, name:q.id, value:o.value, required:q.required||false});
      const txt = document.createTextNode(o.label);
      item.prepend(input);
      item.append(txt);
      list.append(item);
    });
    videoContainer.append(list);
    w.append(videoContainer);
  }

  // Audio Question
  if(q.type==="audio"){
    const audioContainer = el("div", {class:"question-audio"});
    const audio = el("audio", {controls:true, style:"width:100%; margin-bottom:16px;"});
    audio.src = q.audio;
    audioContainer.append(audio);
    
    const list = el("div",{class:"choice-list"});
    (q.options||[]).forEach((o,i)=>{
      const id = `${q.id}_${i}`;
      const item = el("label",{class:"choice", for:id});
      const input = el("input",{type:"radio", id, name:q.id, value:o.value, required:q.required||false});
      const txt = document.createTextNode(o.label);
      item.prepend(input);
      item.append(txt);
      list.append(item);
    });
    audioContainer.append(list);
    w.append(audioContainer);
  }

  // Image Question
  if(q.type==="image"){
    const imageContainer = el("div", {class:"question-image"});
    const img = el("img", {src:q.image, alt:"صورة السؤال", style:"max-width:100%; border-radius:12px;"});
    imageContainer.append(img);
    
    const list = el("div",{class:"choice-list"});
    (q.options||[]).forEach((o,i)=>{
      const id = `${q.id}_${i}`;
      const item = el("label",{class:"choice", for:id});
      const input = el("input",{type:"radio", id, name:q.id, value:o.value, required:q.required||false});
      const txt = document.createTextNode(o.label);
      item.prepend(input);
      item.append(txt);
      list.append(item);
    });
    imageContainer.append(list);
    w.append(imageContainer);
  }

  if(q.help){
    w.append(el("div",{class:"help"}, q.help));
  }

  return w;
}

function renderCurrentStep(direction = 'none') {
  // Find current question
  let questionIndex = 0;
  let currentCategory = null;
  let currentQ = null;
  
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    if (currentQuestion < questionIndex + category.questions.length) {
      currentCategory = category;
      currentQ = category.questions[currentQuestion - questionIndex];
      break;
    }
    questionIndex += category.questions.length;
  }
  
  if (!currentCategory || !currentQ) return;
  
  // Add step content class for animation
  root.className = "step-content";
  
  // Animate in from the appropriate direction
  if (direction === 'next') {
    root.classList.add('slide-in-right');
    categoryTitle.parentElement.classList.add('fade');
    
    setTimeout(() => {
      root.classList.remove('slide-in-right');
      categoryTitle.parentElement.classList.remove('fade');
    }, 50);
  } else if (direction === 'prev') {
    root.classList.add('slide-in-left');
    categoryTitle.parentElement.classList.add('fade');
    
    setTimeout(() => {
      root.classList.remove('slide-in-left');
      categoryTitle.parentElement.classList.remove('fade');
    }, 50);
  }
  
  // Update category info
  categoryTitle.textContent = currentCategory.title;
  categoryDescription.textContent = currentCategory.description;
  
  // Clear and render single question
  root.innerHTML = "";
  root.append(renderQuestion(currentQ));

  // Restore saved data
  restoreQuestionData(currentQ);

  // Add event listeners for real-time validation
  addFormValidationListeners();

  // Update navigation
  updateNavigation();
  updateProgress();
  updateButtonState();
  updateGamificationStats();
}

function restoreQuestionData(q) {
  const savedValue = challengeData[q.id];
  if (savedValue === undefined) return;

  if (q.type === "text" || q.type === "textarea") {
    const el = document.getElementById(q.id);
    if (el) el.value = savedValue;
  } else if (q.type === "select") {
    const el = document.getElementById(q.id);
    if (el) el.value = savedValue;
  } else if (q.type === "radio" || q.type === "rating") {
    const el = document.querySelector(`input[name="${q.id}"][value="${savedValue}"]`);
    if (el) el.checked = true;
  } else if (q.type === "checkbox") {
    if (Array.isArray(savedValue)) {
      savedValue.forEach(val => {
        const el = document.querySelector(`input[name="${q.id}[]"][value="${val}"]`);
        if (el) el.checked = true;
      });
    }
  } else if (q.type === "checkbox-single") {
    const el = document.querySelector(`input[name="${q.id}"]`);
    if (el) el.checked = savedValue === true;
  }
}

function saveCurrentQuestionData() {
  // Find current question
  let questionIndex = 0;
  let currentQ = null;
  
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    if (currentQuestion < questionIndex + category.questions.length) {
      currentQ = category.questions[currentQuestion - questionIndex];
      break;
    }
    questionIndex += category.questions.length;
  }
  
  if (!currentQ) return;
  
  const formData = new FormData(form);
  
  if (currentQ.type === "checkbox") {
    const values = formData.getAll(`${currentQ.id}[]`);
    challengeData[currentQ.id] = values.length > 0 ? values : undefined;
  } else if (currentQ.type === "checkbox-single") {
    challengeData[currentQ.id] = formData.has(currentQ.id);
  } else if (currentQ.type === "rating") {
    const selectedRating = document.querySelector(`input[name="${currentQ.id}"]:checked`);
    challengeData[currentQ.id] = selectedRating ? selectedRating.value : undefined;
  } else {
    const value = formData.get(currentQ.id);
    challengeData[currentQ.id] = value || undefined;
  }
}

function validateCurrentQuestionRealTime() {
  // Find current question
  let questionIndex = 0;
  let currentQ = null;
  
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    if (currentQuestion < questionIndex + category.questions.length) {
      currentQ = category.questions[currentQuestion - questionIndex];
      break;
    }
    questionIndex += category.questions.length;
  }
  
  if (!currentQ || !currentQ.required) return true;
  
  if (currentQ.type === "checkbox-single") {
    const el = document.querySelector(`input[name="${currentQ.id}"]`);
    if (!el || !el.checked) return false;
  } else if (currentQ.type === "radio" || currentQ.type === "rating") {
    const el = document.querySelector(`input[name="${currentQ.id}"]:checked`);
    if (!el) return false;
  } else if (currentQ.type === "text" || currentQ.type === "textarea") {
    const el = document.getElementById(currentQ.id);
    if (!el || !el.value.trim()) return false;
  } else if (currentQ.type === "select") {
    const el = document.getElementById(currentQ.id);
    if (!el || !el.value) return false;
  }
  return true;
}

function addFormValidationListeners() {
  // Find current question
  let questionIndex = 0;
  let currentQ = null;
  
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    if (currentQuestion < questionIndex + category.questions.length) {
      currentQ = category.questions[currentQuestion - questionIndex];
      break;
    }
    questionIndex += category.questions.length;
  }
  
  if (!currentQ || !currentQ.required) return;
  
  if (currentQ.type === "text" || currentQ.type === "textarea") {
    const el = document.getElementById(currentQ.id);
    if (el) {
      el.addEventListener('input', updateButtonState);
      el.addEventListener('blur', updateButtonState);
    }
  } else if (currentQ.type === "select") {
    const el = document.getElementById(currentQ.id);
    if (el) {
      el.addEventListener('change', updateButtonState);
    }
  } else if (currentQ.type === "radio" || currentQ.type === "rating") {
    const radioInputs = document.querySelectorAll(`input[name="${currentQ.id}"]`);
    radioInputs.forEach(input => {
      input.addEventListener('change', updateButtonState);
    });
  } else if (currentQ.type === "checkbox-single") {
    const el = document.querySelector(`input[name="${currentQ.id}"]`);
    if (el) {
      el.addEventListener('change', updateButtonState);
    }
  }
}

function updateNavigation() {
  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  nextBtn.style.display = currentQuestion === totalQuestions - 1 ? "none" : "inline-block";
  submitBtn.style.display = currentQuestion === totalQuestions - 1 ? "inline-block" : "none";
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  progressFill.style.width = `${progress}%`;
  
  currentStepEl.textContent = currentQuestion + 1;
  totalStepsEl.textContent = totalQuestions;
  
  // Update progress steps - show categories
  progressSteps.innerHTML = "";
  let questionIndex = 0;
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    const step = el("div", {class: "progress-step"});
    step.textContent = i + 1;
    
    if (currentQuestion >= questionIndex + category.questions.length) {
      step.classList.add("completed");
    } else if (currentQuestion >= questionIndex) {
      step.classList.add("active");
    }
    
    progressSteps.append(step);
    questionIndex += category.questions.length;
  }
}

function updateButtonState() {
  const isValid = validateCurrentQuestionRealTime();
  
  if (isValid) {
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
  } else {
    nextBtn.classList.add("disabled");
    nextBtn.disabled = true;
  }
}

function updateGamificationStats() {
  currentPointsEl.textContent = userStats.points;
  currentLevelEl.textContent = userStats.level;
  streakEl.textContent = userStats.streak;
}

function calculatePoints() {
  let totalPoints = 0;
  challengeCategories.forEach(category => {
    category.questions.forEach(q => {
      const savedValue = challengeData[q.id];
      if (savedValue !== undefined && savedValue !== "" && savedValue !== false) {
        totalPoints += q.points || 0;
      }
    });
  });
  return totalPoints;
}

function nextStep() {
  if (nextBtn.disabled || nextBtn.classList.contains('disabled')) {
    return;
  }
  
  saveCurrentQuestionData();
  
  if (!validateCurrentQuestion()) {
    showToast("يرجى استكمال الحقول المطلوبة");
    return;
  }
  
  // Show answer feedback for video questions
  if (shouldShowAnswerFeedback()) {
    showAnswerFeedback();
    return;
  }
  
  if (currentQuestion < totalQuestions - 1) {
    root.classList.add('slide-out-left');
    categoryTitle.parentElement.classList.add('fade');
    
    setTimeout(() => {
      currentQuestion++;
      renderCurrentStep('next');
    }, 200);
  }
}

function prevStep() {
  saveCurrentQuestionData();
  
  if (currentQuestion > 0) {
    root.classList.add('slide-out-right');
    categoryTitle.parentElement.classList.add('fade');
    
    setTimeout(() => {
      currentQuestion--;
      renderCurrentStep('prev');
    }, 200);
  }
}

function downloadJSON(obj, filename="alhilal-challenge-results.json"){
  const blob = new Blob([JSON.stringify(obj,null,2)],{type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href=url;a.download=filename;a.click();
  URL.revokeObjectURL(url);
}

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=> toast.classList.remove("show"), 2200);
}

function validateCurrentQuestion() {
  // Find current question
  let questionIndex = 0;
  let currentQ = null;
  
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    if (currentQuestion < questionIndex + category.questions.length) {
      currentQ = category.questions[currentQuestion - questionIndex];
      break;
    }
    questionIndex += category.questions.length;
  }
  
  if (!currentQ || !currentQ.required) return true;
  
  if (currentQ.type === "checkbox-single") {
    const el = document.querySelector(`input[name="${currentQ.id}"]`);
    if (!el || !el.checked) return false;
  } else if (currentQ.type === "radio" || currentQ.type === "rating") {
    const el = document.querySelector(`input[name="${currentQ.id}"]:checked`);
    if (!el) return false;
  } else {
    const value = challengeData[currentQ.id];
    if (!value || (typeof value === 'string' && value.trim() === '')) return false;
  }
  return true;
}

function submitChallenge() {
  saveCurrentQuestionData();
  
  if (!validateCurrentQuestion()) {
    showToast("يرجى استكمال الحقول المطلوبة");
    return;
  }
  
  // Calculate final points
  userStats.points = calculatePoints();
  userStats.level = Math.floor(userStats.points / 100) + 1;
  
  // Show results
  showResults();
  
  downloadJSON({
    submittedAt: new Date().toISOString(),
    userStats: userStats,
    answers: challengeData
  });
  
  showToast("تم إرسال التحدي بنجاح!");
}

function shouldShowAnswerFeedback() {
  // Find current question
  let questionIndex = 0;
  let currentQ = null;
  
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    if (currentQuestion < questionIndex + category.questions.length) {
      currentQ = category.questions[currentQuestion - questionIndex];
      break;
    }
    questionIndex += category.questions.length;
  }
  
  return currentQ && currentQ.type === "video" && currentQ.correctAnswer;
}

function showAnswerFeedback() {
  // Find current question
  let questionIndex = 0;
  let currentQ = null;
  
  for (let i = 0; i < challengeCategories.length; i++) {
    const category = challengeCategories[i];
    if (currentQuestion < questionIndex + category.questions.length) {
      currentQ = category.questions[currentQuestion - questionIndex];
      break;
    }
    questionIndex += category.questions.length;
  }
  
  if (!currentQ) return;
  
  const userAnswer = challengeData[currentQ.id];
  const isCorrect = userAnswer === currentQ.correctAnswer;
  
  // Update user stats
  if (isCorrect) {
    userStats.points += currentQ.points;
    userStats.streak++;
  } else {
    userStats.streak = 0;
  }
  
  const feedbackHTML = `
    <div class="answer-feedback">
      <div class="feedback-header">
        <div class="feedback-icon ${isCorrect ? 'correct' : 'incorrect'}">
          ${isCorrect ? '🎉' : '❌'}
        </div>
        <h2>${isCorrect ? 'إجابة صحيحة!' : 'إجابة خاطئة'}</h2>
        <p>${isCorrect ? `+${currentQ.points} نقطة` : 'لا توجد نقاط لهذه الإجابة'}</p>
      </div>
      
      <div class="feedback-video">
        <h3>شاهد الهدف مرة أخرى:</h3>
        <video controls width="100%" height="300">
          <source src="${currentQ.video}" type="video/mp4">
          متصفحك لا يدعم تشغيل الفيديو
        </video>
      </div>
      
      <div class="feedback-answer">
        <h3>الإجابة الصحيحة:</h3>
        <div class="correct-answer">
          ${currentQ.options.find(opt => opt.value === currentQ.correctAnswer)?.label}
        </div>
      </div>
      
      <div class="feedback-stats">
        <div class="stat-item">
          <span class="stat-label">نقاطك الحالية:</span>
          <span class="stat-value">${userStats.points}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">تسلسل الإجابات الصحيحة:</span>
          <span class="stat-value">${userStats.streak}</span>
        </div>
      </div>
      
      <button class="btn btn-primary" onclick="continueToNextQuestion()">
        ${currentQuestion < totalQuestions - 1 ? 'السؤال التالي' : 'إنهاء التحدي'}
      </button>
    </div>
  `;
  
  root.innerHTML = feedbackHTML;
  updateGamificationStats();
}

function continueToNextQuestion() {
  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    renderCurrentStep('next');
  } else {
    submitChallenge();
  }
}

function showResults() {
  const resultsHTML = `
    <div class="results-container">
      <div class="results-header">
        <div class="trophy">🏆</div>
        <h2>مبروك! لقد أكملت التحدي</h2>
        <p>نتائجك الرائعة:</p>
      </div>
      
      <div class="results-stats">
        <div class="result-card">
          <div class="result-icon">⭐</div>
          <div class="result-value">${userStats.points}</div>
          <div class="result-label">نقطة</div>
        </div>
        <div class="result-card">
          <div class="result-icon">🎯</div>
          <div class="result-value">${userStats.level}</div>
          <div class="result-label">مستوى</div>
        </div>
        <div class="result-card">
          <div class="result-icon">🔥</div>
          <div class="result-value">${userStats.streak}</div>
          <div class="result-label">تسلسل</div>
        </div>
      </div>
      
      <div class="achievements">
        <h3>الإنجازات المكتسبة:</h3>
        <div class="achievement-badge">🏆 مشجع الهلال المخلص</div>
        <div class="achievement-badge">⭐ خبير تاريخ الهلال</div>
        <div class="achievement-badge">🎯 عاشق النجوم</div>
      </div>
      
      <button class="btn btn-primary" onclick="window.location.reload()">تحدي جديد</button>
    </div>
  `;
  
  document.querySelector('.survey-container').innerHTML = resultsHTML;
}


// Event listeners
nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitChallenge();
});

// Initialize
renderCurrentStep();
updateGamificationStats();

// Authentication System (keeping existing functionality)
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const closeAuth = document.getElementById("closeAuth");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const switchToSignUp = document.getElementById("switchToSignUp");
const switchToSignIn = document.getElementById("switchToSignIn");

function showAuthModal() {
  authModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function hideAuthModal() {
  authModal.classList.remove("show");
  document.body.style.overflow = "auto";
}

function switchToSignUpForm() {
  signInForm.classList.remove("active");
  signUpForm.classList.add("active");
}

function switchToSignInForm() {
  signUpForm.classList.remove("active");
  signInForm.classList.add("active");
}

// Event listeners for authentication
loginBtn.addEventListener("click", showAuthModal);
closeAuth.addEventListener("click", hideAuthModal);
switchToSignUp.addEventListener("click", switchToSignUpForm);
switchToSignIn.addEventListener("click", switchToSignInForm);

// Close modal when clicking overlay
authModal.addEventListener("click", (e) => {
  if (e.target === authModal || e.target.classList.contains("auth-modal-overlay")) {
    hideAuthModal();
  }
});

// Handle form submissions
signInForm.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("تم تسجيل الدخول بنجاح!");
  hideAuthModal();
});

signUpForm.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("تم إنشاء الحساب بنجاح!");
  hideAuthModal();
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && authModal.classList.contains("show")) {
    hideAuthModal();
  }
});