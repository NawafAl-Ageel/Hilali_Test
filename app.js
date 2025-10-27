// Gamified Alhilal Fan Challenge System
const challengeCategories = [
  {
    id: "history",
    title: "تاريخ الهلال العريق",
    description: "اختبر معرفتك بتاريخ النادي العريق",
    questions: [
        {
          id: "malcolm_player",
          type: "image",
          label: "من هو هذا اللاعب؟",
          required: true,
          image: "images/Q1/Malcom_Covered.jpg",
          options: [
            {value:"malcolm", label:"مالكوم"},
            {value:"neymar", label:"نيمار"},
            {value:"salem_al_dosari", label:"سالم الدوسري"},
            {value:"michael", label:"مايكل"}
          ],
          correctAnswer: "malcolm",
          points: 15,
          feedbackImage: "images/Q1/Malcom_Uncovered.jpg"
        },
      {
        id: "city_match_result",
        type: "image",
        label: "من هو الفريق المنافس في هذه المباراة؟",
        required: true,
        image: "images/Q2/City_Match_Result_Covered.png",
        options: [
          {value:"manchester_city", label:"مانشستر سيتي"},
          {value:"chelsea", label:"تشيلسي"},
          {value:"liverpool", label:"ليفربول"},
          {value:"arsenal", label:"أرسنال"}
        ],
        correctAnswer: "manchester_city",
        points: 20,
        feedbackImage: "images/Q2/City_Match_Result_Uncovered.png"
      },
      {
        id: "thiago_neves_goal",
        type: "video",
        label: "مين سجل هذا الهدف؟",
        required: true,
        video: "images/Q3/Thiago_Neves_Goal.mp4",
        options: [
          {value:"savic", label:"سافيتش"},
          {value:"al_breik", label:"محمد البريك"},
          {value:"thiago_neves", label:"تياغو نيفيز"},
          {value:"yasser_al_qhtani", label:"ياسر القحطاني"}
        ],
        correctAnswer: "thiago_neves",
        points: 20,
        feedbackVideo: "images/Q3/Thiago_Neves_Uncovered.mp4"
      },
      {
        id: "nasir_goal",
        type: "video",
        label: "من صاحب هذا الهدف الرائع؟",
        required: true,
        video: "images/Q4/Nasir_Goal_Covered.mp4",
        options: [
          {value:"abdullah_al_hamdan", label:"عبدالله الحمدان"},
          {value:"bafetimbi_gomis", label:"بافيتيمبي جوميز"},
          {value:"nasser_al_dawsari", label:"ناصر الدوسري"},
          {value:"moussa_marega", label:"موسى ماريجا"}
        ],
        correctAnswer: "nasser_al_dawsari",
        points: 25,
        feedbackVideo: "images/Q4/Nasir_Goal_Uncovered.mp4"
      },
      {
        id: "nawaf_alaabid_player",
        type: "image",
        label: "من هو هذا اللاعب؟",
        required: true,
        image: "images/Q7/Nawaf_Alaabid_Covered.jpg",
        options: [
          {value:"nawaf_alaabid", label:"نواف العابد"},
          {value:"abdullah_otayf", label:"عبدالله عطيف"},
          {value:"salman_alfaraj", label:"سلمان الفرج"},
          {value:"ali_albulayhi", label:"علي البليهي"}
        ],
        correctAnswer: "nawaf_alaabid",
        points: 20,
        feedbackImage: "images/Q7/Nawaf_Alaabid_Uncovered.jpg"
      },
      {
        id: "alhazm_match",
        type: "image",
        label: "من هو الفريق المنافس في هذه المباراة موسم 23/24؟",
        required: true,
        image: "images/Q8/Alhazim_Match_Covered.jpg",
        options: [
          {value:"alhazm", label:"الحزم"},
          {value:"alfateh", label:"الفتح"},
          {value:"alwehda", label:"الوحدة"},
          {value:"altaawon", label:"التعاون"}
        ],
        correctAnswer: "alhazm",
        points: 20,
        feedbackImage: "images/Q8/Alhazim_Match_Uncovered.png"
      }
    ]
  },
  {
    id: "players",
    title: "النجوم والأساطير",
    description: "تعرف على نجوم الهلال الحاليين والسابقين",
    questions: [
      {
        id: "top_scorer_history",
        type: "radio",
        label: "من هو الهداف التاريخي لنادي الهلال؟",
        required: true,
        options: [
          {value:"nawaf_altimyat", label:"نواف التمياط"},
          {value:"sami_aljaber", label:"سامي الجابر"},
          {value:"yasser_al_qhtani", label:"ياسر القحطاني"},
          {value:"salem_al_dosari", label:"سالم الدوسري"}
        ],
        correctAnswer: "yasser_al_qhtani",
        points: 18
      },
      {
        id: "previous_coach",
        type: "radio",
        label: "من درب نادي الهلال قبل انزاغي و جيسوس موسم 2023/2022؟",
        required: true,
        options: [
          {value:"leonardo_jardim", label:"ليوناردو جارديم"},
          {value:"mohammed_alshalhoub", label:"محمد الشلهوب"},
          {value:"jose_morais", label:"جوزيه مورايش"},
          {value:"ramon_diaz", label:"رامون دياز"}
        ],
        correctAnswer: "ramon_diaz",
        points: 20
      },
      {
        id: "commentary_alahli",
        type: "audio",
        label: "في أي مباراة كان هذا التعليق؟",
        required: true,
        audio: "images/Q5/Commentary_Alahli.m4a",
        options: [
          {value:"alhilal_vs_alahli", label:"الهلال × الأهلي"},
          {value:"alhilal_vs_ittihad", label:"الهلال × الاتحاد"},
          {value:"alhilal_vs_nassr", label:"الهلال × النصر"},
          {value:"alhilal_vs_shabab", label:"الهلال × الشباب"}
        ],
        correctAnswer: "alhilal_vs_alahli",
        points: 25,
        feedbackAudio: "images/Q5/Commentary_Alahli.mp4"
      },
      {
        id: "jahfili_goal_alnassar",
        type: "audio",
        label: "في أي مباراة كان هذا الهدف؟",
        required: true,
        audio: "images/Q6/Jahfili_Goal_Alnassar.m4a",
        options: [
          {value:"alhilal_vs_nassr", label:"الهلال × النصر"},
          {value:"alhilal_vs_ittihad", label:"الهلال × الاتحاد"},
          {value:"alhilal_vs_alahli", label:"الهلال × الأهلي"},
          {value:"alhilal_vs_ettifaq", label:"الهلال × الاتفاق"}
        ],
        correctAnswer: "alhilal_vs_nassr",
        points: 30,
        feedbackAudio: "images/Q6/Jahfili_Goal_Alnassar.mp4"
      }
    ]
  }
];

// Gamification System
let currentStep = 0;
let currentQuestion = 0;
let totalQuestions = 0;
let challengeData = {};
let userPoints = 0;
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
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const currentStepEl = document.getElementById("currentStep");
const totalStepsEl = document.getElementById("totalSteps");
const progressFill = document.getElementById("progressFill");
const progressSteps = document.getElementById("progressSteps");

// Gamification Elements - removed as they don't exist in current HTML

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
        controls: false,
        width: "100%",
        height: "300",
        autoplay: true,
        loop: true,
        muted: true,
        playsinline: true,
        style: "border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.15); pointer-events: none;"
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

    // Image Question
    if(q.type==="image"){
      const imageContainer = el("div", {class:"question-image"});
      
      // Add image title
      const imageTitle = el("h4", {style:"margin-bottom:16px; font-size:18px; font-weight:600; color:var(--text);"}, "انظر إلى الصورة:");
      imageContainer.append(imageTitle);
      
      // Create image element
      const img = el("img", {
        src: q.image,
        alt: "صورة اللاعب",
        style: "width:100%; max-width:400px; height:auto; border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.15); margin:0 auto; display:block;"
      });
      
      imageContainer.append(img);
      
      // Add options below image
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

  // Audio Question
  if(q.type==="audio"){
    const audioContainer = el("div", {class:"question-audio"});
    const audio = el("audio", {
      controls: true, 
      autoplay: true,
      loop: true,
      muted: false,
      style: "width:100%; margin-bottom:16px;"
    });
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
  
  if (!currentCategory || !currentQ) {
    return;
  }
  
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
  } else if (currentQ.type === "radio" || currentQ.type === "rating" || currentQ.type === "video" || currentQ.type === "image" || currentQ.type === "audio") {
    const radioInputs = document.querySelectorAll(`input[name="${currentQ.id}"]`);
    radioInputs.forEach(input => {
      input.addEventListener('change', function() {
        updateButtonState();
        // Show instant feedback if question has correct answer
        if (currentQ.correctAnswer) {
          showInstantFeedback(currentQ, this.value);
        } else {
          // No feedback, just auto-progress
          saveCurrentQuestionData();
          setTimeout(() => {
            autoProgressToNext();
          }, 600);
        }
      });
    });
  } else if (currentQ.type === "checkbox-single") {
    const el = document.querySelector(`input[name="${currentQ.id}"]`);
    if (el) {
      el.addEventListener('change', updateButtonState);
    }
  }
}

function showInstantFeedback(question, selectedValue) {
  let isCorrect = false;

  // Handle different question types
  if (question.type === "checkbox") {
    // For checkbox questions, check if all correct answers are selected
    const selectedValues = Array.isArray(selectedValue) ? selectedValue : [selectedValue];
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
    isCorrect = correctAnswers.every(answer => selectedValues.includes(answer)) &&
                selectedValues.every(value => correctAnswers.includes(value));
  } else if (question.type === "text" || question.type === "textarea") {
    // For text questions, check if answer matches or is "any"
    if (question.correctAnswer === "any") {
      isCorrect = selectedValue && selectedValue.trim().length > 0;
    } else {
      isCorrect = selectedValue && selectedValue.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    }
  } else if (question.type === "checkbox-single") {
    // For single checkbox, just check if it's checked
    isCorrect = selectedValue === "true" || selectedValue === true;
  } else if (question.type === "rating") {
    // For rating questions, compare the label values
    const selectedLabel = question.labels?.[parseInt(selectedValue) - 1];
    isCorrect = selectedLabel === question.correctAnswer;
  } else {
    // For radio, video, audio, image questions
    isCorrect = selectedValue === question.correctAnswer;
  }

  // Update points if correct
  if (isCorrect) {
    userStats.points += question.points;
    userStats.streak++;
    updateGamificationStats();
  } else {
    userStats.streak = 0;
    updateGamificationStats();
  }
  
  // For image questions, replace the covered image with uncovered
  if (question.type === "image" && question.feedbackImage && isCorrect) {
    const img = root.querySelector('.question-image img');
    if (img) {
      img.style.transition = 'opacity 0.3s ease';
      img.style.opacity = '0';

      setTimeout(() => {
        img.src = question.feedbackImage;
        img.style.opacity = '1';
      }, 300);
    }
  }

  // For video questions, replace the covered video with uncovered
  if (question.type === "video" && question.feedbackVideo && isCorrect) {
    const video = root.querySelector('.question-video video');
    if (video) {
      video.style.transition = 'opacity 0.3s ease';
      video.style.opacity = '0';

      setTimeout(() => {
        video.src = question.feedbackVideo;
        video.load();
        video.style.opacity = '1';
      }, 300);
    }
  }

  // For audio questions, replace the covered audio with uncovered
  if (question.type === "audio" && question.feedbackAudio && isCorrect) {
    const audio = root.querySelector('.question-audio audio');
    if (audio) {
      audio.style.transition = 'opacity 0.3s ease';
      audio.style.opacity = '0';

      setTimeout(() => {
        audio.src = question.feedbackAudio;
        audio.load();
        audio.style.opacity = '1';
      }, 300);
    }
  }

  // Highlight correct answer in green (only for choice-based questions)
  if (question.type === "radio" || question.type === "checkbox" || question.type === "video" ||
      question.type === "audio" || question.type === "image" || question.type === "rating") {
    const correctInput = root.querySelector(`input[name="${question.id}"][value="${question.correctAnswer}"]`);
    if (correctInput) {
      const correctLabel = correctInput.closest('.choice');
      if (correctLabel) {
        correctLabel.classList.add('correct-answer');
      }
    }

    // If wrong, highlight the wrong answer in red
    if (!isCorrect) {
      const wrongInput = root.querySelector(`input[name="${question.id}"][value="${selectedValue}"]`);
      if (wrongInput) {
        const wrongLabel = wrongInput.closest('.choice');
        if (wrongLabel) {
          wrongLabel.classList.add('wrong-answer');
        }
      }
    }
  }
  
  // Show feedback message overlay
  const feedbackOverlay = document.createElement('div');
  feedbackOverlay.className = 'instant-feedback-overlay';
  feedbackOverlay.innerHTML = `
    <div class="instant-feedback-message ${isCorrect ? 'correct' : 'wrong'}">
      <div class="feedback-icon">${isCorrect ? '✓' : '✗'}</div>
      <h3>${isCorrect ? 'صح عليك!' : 'غلط للأسف'}</h3>
      ${isCorrect ? `<p class="feedback-points">+${question.points} نقطة</p>` : ''}
      ${question.type === 'image' && question.feedbackImage && isCorrect ? `
        <div class="feedback-image-container">
          <img src="${question.feedbackImage}" alt="الصورة الحقيقية" class="feedback-image">
        </div>
      ` : ''}
      ${question.type === 'video' && question.feedbackVideo && isCorrect ? `
        <div class="feedback-video-container">
          <video src="${question.feedbackVideo}" autoplay loop muted playsinline class="feedback-video" style="width:100%; max-width:400px; height:auto; border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.15); margin:16px auto; display:block; pointer-events: none;"></video>
        </div>
      ` : ''}
      ${question.type === 'audio' && question.feedbackAudio && isCorrect ? `
        <div class="feedback-audio-container">
          <video src="${question.feedbackAudio}" autoplay loop muted playsinline class="feedback-audio" style="width:100%; max-width:400px; height:auto; border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.15); margin:16px auto; display:block; pointer-events: none;"></video>
        </div>
      ` : ''}
    </div>
  `;
  
  root.appendChild(feedbackOverlay);

  // Animate in
  setTimeout(() => {
    feedbackOverlay.classList.add('show');
  }, 50);

  // Auto-progress after showing feedback
  // Video questions get more time to watch the uncovered goal
  // Audio questions get even more time to listen to the full clip
  let feedbackDuration = 2500; // Default: 2.5 seconds
  if (question.type === "video") {
    feedbackDuration = 5000; // Videos: 5 seconds
  } else if (question.type === "audio") {
    feedbackDuration = 8000; // Audio: 10 seconds
  }

  setTimeout(() => {
    autoProgressToNext();
  }, feedbackDuration);
}

function autoProgressToNext() {
  // Check if this is the last question
  if (currentQuestion >= totalQuestions - 1) {
    // Auto-submit after last question feedback
    setTimeout(() => {
      submitChallenge();
    }, 500);
    return;
  }

  // Progress to next question
  root.classList.add('slide-out-left');
  categoryTitle.parentElement.classList.add('fade');

  setTimeout(() => {
    currentQuestion++;
    renderCurrentStep('next');
  }, 200);
}

function updateNavigation() {
  // Hide Next button - auto-progression is enabled
  nextBtn.style.display = "none";
  // Hide Submit button - auto-submit is enabled after last question feedback
  submitBtn.style.display = "none";
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  progressFill.style.width = `${progress}%`;

  currentStepEl.textContent = currentQuestion + 1;
  totalStepsEl.textContent = totalQuestions;

  // Update progress steps - show all individual questions
  progressSteps.innerHTML = "";
  for (let i = 0; i < totalQuestions; i++) {
    const step = el("div", {class: "progress-step"});
    step.textContent = i + 1;

    if (i < currentQuestion) {
      step.classList.add("completed");
    } else if (i === currentQuestion) {
      step.classList.add("active");
    }

    progressSteps.append(step);
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
  // Gamification stats elements removed - no longer needed
  // Stats are still tracked internally for results calculation
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

  if (currentQuestion < totalQuestions - 1) {
    root.classList.add('slide-out-left');
    categoryTitle.parentElement.classList.add('fade');

    setTimeout(() => {
      currentQuestion++;
      renderCurrentStep('next');
    }, 200);
  }
}

// prevStep function removed - no longer needed

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

  // Points are already calculated in showInstantFeedback()
  // Just update the level based on current points
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

function showResults() {
  // Calculate fan rank based on score (out of 213 total points)
  const percentage = (userStats.points / 213) * 100;
  let fanRank = {};

  if (percentage >= 90) {
    fanRank = {
      title: "دمك أزرق 💙",
      emoji: "👑",
      message: "أنت أسطورة هلالية!",
      color: "#1e40af"
    };
  } else if (percentage >= 75) {
    fanRank = {
      title: "متيم بالهلال 💙⚡",
      emoji: "🔥",
      message: "مشجع حقيقي! أنت من عشاق الهلال ",
      color: "#2563eb"
    };
  } else if (percentage >= 60) {
    fanRank = {
      title: "هلالي أصيل ⚽",
      emoji: "⭐",
      message: "معرفة ممتازة! تعرف  قدر ممتاز",
      color: "#3b82f6"
    };
  } else if (percentage >= 40) {
    fanRank = {
      title: "مشجع الهلال 🎯",
      emoji: "💪",
      message: "متعمق بشكل جيد, لكن تحتاج لمتابعة أكثر",
      color: "#60a5fa"
    };
  } else {
    fanRank = {
      title: "مبتدئ هلالي 🌟",
      emoji: "📚",
      message: "تحب الهلال, بس الظاهر ما عندك وقت",
      color: "#93c5fd"
    };
  }

  const resultsHTML = `
    <div class="results-container">
      <div class="results-header">
        <div class="trophy">${fanRank.emoji}</div>
        <h2 style="color: ${fanRank.color}; font-size: 32px; margin: 16px 0;">${fanRank.title}</h2>
        <p style="font-size: 18px; color: var(--text); margin-bottom: 8px;">${fanRank.message}</p>
        <p style="font-size: 16px; color: var(--muted);">حصلت على <strong style="color: var(--primary-700); font-size: 24px;">${userStats.points}</strong> من 213 نقطة</p>
      </div>

      <div class="achievement-badge" style="background: linear-gradient(135deg, ${fanRank.color}, var(--primary-800)); font-size: 22px; padding: 16px 32px; margin: 32px auto; display: inline-block; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);">
        ${fanRank.emoji} ${fanRank.title}
      </div>

      <div class="share-section">
        <button class="share-btn twitter-share" onclick="shareOnTwitter()">
          <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          شارك نتيجتك على X
        </button>
      </div>
    </div>
  `;

  // Hide the intro section (gamification stats at top)
  const introSection = document.querySelector('.intro');
  if (introSection) {
    introSection.style.display = 'none';
    introSection.remove(); // Also remove it from DOM
  }

  // Hide progress container too
  const progressContainer = document.querySelector('.progress-container');
  if (progressContainer) {
    progressContainer.style.display = 'none';
  }

  document.querySelector('.survey-container').innerHTML = resultsHTML;
}

// Share on Twitter/X function
function shareOnTwitter() {
  const percentage = Math.round((userStats.points / 213) * 100);
  const fanRank = getFanRankTitle(userStats.points);
  
  const tweetText = `🏆 اختبرت هلاليتي وجبت  ${userStats.points} من 213 نقطة! ${fanRank} 💙\n\ اختبر معرفتك بالزعيم!\n\n#الهلال #تحدي_الهلال #مشجعي_الهلال`;
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(window.location.href)}`;
  
  window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function getFanRankTitle(points) {
  const percentage = (points / 213) * 100;
  
  if (percentage >= 90) {
    return "دمك أزرق 💙";
  } else if (percentage >= 75) {
    return "متيم بالهلال 💙⚡";
  } else if (percentage >= 60) {
    return "هلالي صميم ⚽";
  } else if (percentage >= 40) {
    return "مشجع أصيل 🎯";
  } else {
    return "مبتدئ هلالي 🌟";
  }
}


// Event listeners
nextBtn.addEventListener("click", nextStep);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitChallenge();
});

// Initialize
initIntroAnimation();

// Also initialize immediately as fallback
setTimeout(() => {
  // Check if app is already initialized
  if (!document.querySelector('.survey-container .card')) {
    renderCurrentStep();
    updateGamificationStats();
  }
}, 3000);

// Authentication System removed - no longer needed

// Intro Animation System
function initIntroAnimation() {
  const introSplash = document.getElementById("introAnimation");
  const body = document.body;
  
  // Add intro-active class to body
  body.classList.add("intro-active");
  
  // Start intro animation sequence (show every time)
  startIntroSequence();
}

function startIntroSequence() {
  const introSplash = document.getElementById("introAnimation");
  const body = document.body;
  
  // Animation timeline:
  // 0.2s: Logo entrance animation starts
  // 0.8s: Progress bar appears
  // 1.2s: Progress bar starts filling
  // 1.9s: Progress bar completes
  // 2.0s: Intro completes and fades out
  
  setTimeout(() => {
    // Complete the intro
    completeIntroAnimation();
  }, 2000);
}


function completeIntroAnimation() {
  const introSplash = document.getElementById("introAnimation");
  const body = document.body;
 
  // Hide intro splash
  if (introSplash) {
    introSplash.classList.add("hide");
  }
 
  // Update body classes
  body.classList.remove("intro-active");
  body.classList.add("intro-complete");
 
  // Initialize the main app immediately
  renderCurrentStep();
  updateGamificationStats();
  updateButtonState();
 
  // Remove intro splash from DOM after a short delay (just for cleanup)
  setTimeout(() => {
    if (introSplash && introSplash.parentNode) {
      introSplash.parentNode.removeChild(introSplash);
    }
  }, 500);
}

function hideIntroAnimation() {
  const introSplash = document.getElementById("introAnimation");
  const body = document.body;
  
  if (introSplash) {
    introSplash.style.display = "none";
  }
  
  body.classList.remove("intro-active");
  body.classList.add("intro-complete");
  
  // Initialize the main app
  renderCurrentStep();
  updateGamificationStats();
}

// Add skip intro functionality (optional)
function skipIntro() {
  completeIntroAnimation();
}

// Add click to skip functionality
document.addEventListener("DOMContentLoaded", () => {
  const introSplash = document.getElementById("introAnimation");
  if (introSplash) {
    introSplash.addEventListener("click", (e) => {
      // Only skip if clicking on the splash area, not on content
      if (e.target === introSplash || e.target.classList.contains("intro-background")) {
        skipIntro();
      }
    });
  }
});