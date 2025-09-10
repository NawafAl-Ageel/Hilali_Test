const surveyCategories = [
  {
    id: "basic",
    title: "المعلومات الأساسية",
    description: "معلومات عامة عن الفريق واللاعب",
    questions: [
      {
        id: "teamCategory",
        type: "select",
        label: "فئة الفريق",
        required: true,
        placeholder: "اختر فئة الفريق",
        options: [
          {value:"first", label:"الفريق الأول"},
          {value:"youth", label:"فريق الشباب"},
          {value:"juniors", label:"فريق الناشئين"},
          {value:"academy", label:"الأكاديمية"}
        ]
      },
      {
        id: "fullName",
        type: "text",
        label: "الاسم الكامل",
        required: true,
        placeholder: "مثال: محمد أحمد"
      },
      {
        id: "playerNumber",
        type: "text",
        label: "رقم اللاعب (اختياري)",
        required: false,
        inputmode: "numeric",
        placeholder: "رقم القميص"
      },
      {
        id: "position",
        type: "select",
        label: "المركز",
        required: true,
        placeholder: "اختر مركزك",
        options: [
          {value:"goalkeeper", label:"حارس مرمى"},
          {value:"defender", label:"مدافع"},
          {value:"midfielder", label:"وسط ميدان"},
          {value:"forward", label:"مهاجم"}
        ]
      }
    ]
  },
  {
    id: "performance",
    title: "الأداء العام للمدرب",
    description: "تقييم شامل لأداء المدرب",
    questions: [
      {
        id: "coachPerformance",
        type: "rating",
        label: "كيف تقيم أداء المدرب بشكل عام؟",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "tacticalKnowledge",
        type: "rating",
        label: "المعرفة التكتيكية للمدرب",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "gameManagement",
        type: "rating",
        label: "إدارة المباريات",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "decisionMaking",
        type: "rating",
        label: "اتخاذ القرارات المناسبة",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      }
    ]
  },
  {
    id: "training",
    title: "التدريب وتطوير اللاعبين",
    description: "تقييم جودة التدريبات وتطوير المهارات",
    questions: [
      {
        id: "trainingQuality",
        type: "rating",
        label: "جودة التدريبات",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "playerDevelopment",
        type: "rating",
        label: "تطوير مهارات اللاعبين",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "trainingVariety",
        type: "rating",
        label: "تنوع التدريبات",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "physicalPreparation",
        type: "rating",
        label: "الإعداد البدني",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      }
    ]
  },
  {
    id: "communication",
    title: "التواصل والعلاقات",
    description: "تقييم التواصل والتحفيز",
    questions: [
      {
        id: "communication",
        type: "rating",
        label: "التواصل مع اللاعبين",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "motivation",
        type: "rating",
        label: "تحفيز اللاعبين",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "teamSpirit",
        type: "rating",
        label: "بناء روح الفريق",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      },
      {
        id: "discipline",
        type: "rating",
        label: "الانضباط والنظام",
        required: true,
        scale: 5,
        labels: ["ضعيف","مقبول","جيد","جيد جداً","ممتاز"]
      }
    ]
  },
  {
    id: "feedback",
    title: "التقييم النهائي والملاحظات",
    description: "ملاحظاتك وتوصياتك النهائية",
    questions: [
      {
        id: "recommendCoach",
        type: "radio",
        label: "هل تنصح بالاحتفاظ بهذا المدرب؟",
        required: true,
        options: [
          {value:"yes", label:"نعم، بالتأكيد"},
          {value:"maybe", label:"ربما"},
          {value:"no", label:"لا، يجب تغييره"}
        ]
      },
      {
        id: "strengths",
        type: "checkbox",
        label: "نقاط القوة في المدرب (يمكن اختيار أكثر من خيار)",
        required: false,
        options: [
          {value:"tactical", label:"المعرفة التكتيكية"},
          {value:"motivation", label:"تحفيز اللاعبين"},
          {value:"discipline", label:"الانضباط"},
          {value:"communication", label:"التواصل الجيد"},
          {value:"experience", label:"الخبرة"},
          {value:"player_development", label:"تطوير اللاعبين"}
        ]
      },
      {
        id: "improvements",
        type: "checkbox",
        label: "المجالات التي تحتاج تحسين (يمكن اختيار أكثر من خيار)",
        required: false,
        options: [
          {value:"tactical", label:"التخطيط التكتيكي"},
          {value:"communication", label:"التواصل مع اللاعبين"},
          {value:"training", label:"تنظيم التدريبات"},
          {value:"motivation", label:"تحفيز اللاعبين"},
          {value:"discipline", label:"الانضباط"},
          {value:"substitutions", label:"التغييرات أثناء المباريات"}
        ]
      },
      {
        id: "comments",
        type: "textarea",
        label: "ملاحظاتك الإضافية حول المدرب",
        required: false,
        placeholder: "اكتب ملاحظاتك هنا..."
      },
      {
        id: "consent",
        type: "checkbox-single",
        label: "أوافق على استخدام بياناتي لتطوير العملية التدريبية وفق سياسة الخصوصية",
        required: true
      }
    ]
  }
];

// Multi-step survey logic
let currentStep = 0;
const totalSteps = surveyCategories.length;
let surveyData = {};

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

function fieldWrap(id, label, required){
  const wrap = el("div", {class:"field"});
  if(label){
    const l = el("label", {class:"field__label", for:id}, label, required ? el("span",{class:"muted"}, " *") : "");
    wrap.append(l);
  }
  return wrap;
}

function renderQuestion(q) {
  let w = fieldWrap(q.id, q.type==="checkbox-single" ? "" : q.label, q.required);

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

  if(q.help){
    w.append(el("div",{class:"help"}, q.help));
  }

  return w;
}

function renderCurrentStep(direction = 'none') {
  const category = surveyCategories[currentStep];
  
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
  categoryTitle.textContent = category.title;
  categoryDescription.textContent = category.description;
  
  // Clear and render questions
  root.innerHTML = "";
  category.questions.forEach(q => {
    root.append(renderQuestion(q));
  });

  // Restore saved data
  restoreStepData(category);

  // Add event listeners for real-time validation
  addFormValidationListeners();

  // Update navigation
  updateNavigation();
  updateProgress();
  updateButtonState();
}

function restoreStepData(category) {
  category.questions.forEach(q => {
    const savedValue = surveyData[q.id];
    if (savedValue === undefined) return;

    if (q.type === "text" || q.type === "textarea") {
      const el = document.getElementById(q.id);
      if (el) el.value = savedValue;
    } else if (q.type === "select") {
      const el = document.getElementById(q.id);
      if (el) el.value = savedValue;
    } else if (q.type === "radio") {
      const el = document.querySelector(`input[name="${q.id}"][value="${savedValue}"]`);
      if (el) el.checked = true;
    } else if (q.type === "rating") {
      // Special handling for rating inputs
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
  });
}

function saveCurrentStepData() {
  const category = surveyCategories[currentStep];
  const formData = new FormData(form);
  
  category.questions.forEach(q => {
    if (q.type === "checkbox") {
      const values = formData.getAll(`${q.id}[]`);
      surveyData[q.id] = values.length > 0 ? values : undefined;
    } else if (q.type === "checkbox-single") {
      surveyData[q.id] = formData.has(q.id);
    } else if (q.type === "rating") {
      // Special handling for rating inputs
      const selectedRating = document.querySelector(`input[name="${q.id}"]:checked`);
      surveyData[q.id] = selectedRating ? selectedRating.value : undefined;
    } else {
      const value = formData.get(q.id);
      surveyData[q.id] = value || undefined;
    }
  });
}

function validateCurrentStep() {
  const category = surveyCategories[currentStep];
  const requiredFields = category.questions.filter(q => q.required);
  
  for (const q of requiredFields) {
    if (q.type === "checkbox-single") {
      const el = document.querySelector(`input[name="${q.id}"]`);
      if (!el || !el.checked) return false;
    } else if (q.type === "radio") {
      const el = document.querySelector(`input[name="${q.id}"]:checked`);
      if (!el) return false;
    } else {
      const value = surveyData[q.id];
      if (!value || (typeof value === 'string' && value.trim() === '')) return false;
    }
  }
  return true;
}

function updateNavigation() {
  prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";
  nextBtn.style.display = currentStep === totalSteps - 1 ? "none" : "inline-block";
  submitBtn.style.display = currentStep === totalSteps - 1 ? "inline-block" : "none";
}

function updateProgress() {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  progressFill.style.width = `${progress}%`;
  
  currentStepEl.textContent = currentStep + 1;
  totalStepsEl.textContent = totalSteps;
  
  // Update progress steps
  progressSteps.innerHTML = "";
  for (let i = 0; i < totalSteps; i++) {
    const step = el("div", {class: "progress-step"});
    step.textContent = i + 1;
    
    if (i < currentStep) step.classList.add("completed");
    else if (i === currentStep) step.classList.add("active");
    
    progressSteps.append(step);
  }
}

function updateButtonState() {
  const isValid = validateCurrentStepRealTime();
  
  if (isValid) {
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
  } else {
    nextBtn.classList.add("disabled");
    nextBtn.disabled = true;
  }
}

function validateCurrentStepRealTime() {
  const category = surveyCategories[currentStep];
  const requiredFields = category.questions.filter(q => q.required);
  
  for (const q of requiredFields) {
    if (q.type === "checkbox-single") {
      const el = document.querySelector(`input[name="${q.id}"]`);
      if (!el || !el.checked) return false;
    } else if (q.type === "radio" || q.type === "rating") {
      const el = document.querySelector(`input[name="${q.id}"]:checked`);
      if (!el) return false;
    } else if (q.type === "text" || q.type === "textarea") {
      const el = document.getElementById(q.id);
      if (!el || !el.value.trim()) return false;
    } else if (q.type === "select") {
      const el = document.getElementById(q.id);
      if (!el || !el.value) return false;
    }
  }
  return true;
}

function addFormValidationListeners() {
  const category = surveyCategories[currentStep];
  
  category.questions.forEach(q => {
    if (q.required) {
      if (q.type === "text" || q.type === "textarea") {
        const el = document.getElementById(q.id);
        if (el) {
          el.addEventListener('input', updateButtonState);
          el.addEventListener('blur', updateButtonState);
        }
      } else if (q.type === "select") {
        const el = document.getElementById(q.id);
        if (el) {
          el.addEventListener('change', updateButtonState);
        }
      } else if (q.type === "radio" || q.type === "rating") {
        const radioInputs = document.querySelectorAll(`input[name="${q.id}"]`);
        radioInputs.forEach(input => {
          input.addEventListener('change', updateButtonState);
        });
      } else if (q.type === "checkbox-single") {
        const el = document.querySelector(`input[name="${q.id}"]`);
        if (el) {
          el.addEventListener('change', updateButtonState);
        }
      }
    }
  });
}

function nextStep() {
  // Prevent action if button is disabled
  if (nextBtn.disabled || nextBtn.classList.contains('disabled')) {
    return;
  }
  
  saveCurrentStepData();
  
  if (!validateCurrentStep()) {
    showToast("يرجى استكمال الحقول المطلوبة");
    return;
  }
  
  if (currentStep < totalSteps - 1) {
    // Animate current content out to the left
    root.classList.add('slide-out-left');
    categoryTitle.parentElement.classList.add('fade');
    
    setTimeout(() => {
      currentStep++;
      renderCurrentStep('next');
    }, 200);
  }
}

function prevStep() {
  saveCurrentStepData();
  
  if (currentStep > 0) {
    // Animate current content out to the right
    root.classList.add('slide-out-right');
    categoryTitle.parentElement.classList.add('fade');
    
    setTimeout(() => {
      currentStep--;
      renderCurrentStep('prev');
    }, 200);
  }
}

function downloadJSON(obj, filename="alhilal-coach-evaluation.json"){
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

function submitSurvey() {
  saveCurrentStepData();
  
  if (!validateCurrentStep()) {
    showToast("يرجى استكمال الحقول المطلوبة");
    return;
  }
  
  downloadJSON({submittedAt:new Date().toISOString(), data: surveyData});
  const view = document.getElementById("thankYouTmpl").content.cloneNode(true);
  document.querySelector('.survey-container').replaceWith(view);
  showToast("تم الإرسال بنجاح");
}

// Event listeners
nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitSurvey();
});

// Initialize
renderCurrentStep();

// Authentication System
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
  // Here you would typically handle the actual authentication
});

signUpForm.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("تم إنشاء الحساب بنجاح!");
  hideAuthModal();
  // Here you would typically handle the actual registration
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && authModal.classList.contains("show")) {
    hideAuthModal();
  }
});