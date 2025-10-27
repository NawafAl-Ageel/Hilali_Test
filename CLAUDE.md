# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Arabic RTL (right-to-left) gamified survey web application for "Alhilal Fan Challenge" - an interactive quiz about the Alhilal football club (النادي الأهلي السعودي). The application is built with vanilla JavaScript, HTML, and CSS with no external frameworks or build tools.

## Architecture

### Core Components

1. **Challenge System (`app.js`)**
   - Multi-category quiz with dynamic question rendering
   - Question types: text, textarea, radio, checkbox, checkbox-single, rating, video, image, audio, select
   - Real-time validation and instant feedback system
   - Auto-progression after question answers with animated transitions

2. **Gamification Engine**
   - Points system with configurable point values per question
   - Level calculation based on total points (level = floor(points/100) + 1)
   - Streak tracking for consecutive correct answers
   - Achievement badges system
   - Real-time stats display (points, level, streak)

3. **Data Model (`challengeCategories`)**
   - Array of category objects containing:
     - `id`, `title`, `description`
     - `questions[]` with each question having: `id`, `type`, `label`, `required`, `options[]`, `correctAnswer`, `points`, optional `feedbackImage`
   - Questions can have multimedia content (images, videos, audio)
   - Correct answers are validated client-side for instant feedback

4. **State Management**
   - `currentStep`: Current category index
   - `currentQuestion`: Current question index (global across all categories)
   - `challengeData`: Object storing all user answers by question ID
   - `userStats`: Object tracking points, level, streak, achievements
   - All state is stored in global variables (no framework)

### Rendering Flow

1. **Single Question Display**: Each step shows ONE question at a time
2. **Progress Tracking**: Visual progress bar and step indicators show category-level progress
3. **Dynamic Rendering**: `renderQuestion()` creates appropriate input elements based on question type
4. **Data Restoration**: Previously answered questions restore saved values when navigating back
5. **Validation**: Real-time validation enables/disables navigation buttons
6. **Auto-progression**: After answering with instant feedback, auto-advances to next question after 2.5s

### Feedback System

- **Instant Feedback**: Shows overlay with correct/wrong indicator immediately after answer
- **Visual Highlighting**: Correct answers get green styling, wrong answers get red
- **Points Animation**: Displays earned points with animations
- **Image Reveal**: For image questions, replaces covered image with uncovered version on correct answer
- **Video/Audio Questions**: Shows video replay and correct answer after response

### Authentication System

- Modal-based sign-in and sign-up forms (non-functional UI only)
- Forms include email, password, phone number, terms acceptance
- Toggle between sign-in and sign-up views
- Modal closes on overlay click or Escape key

## File Structure

```
.
├── index.html          # Main HTML structure (RTL, Arabic)
├── app.js              # All application logic and data
├── styles.css          # Complete styling including gamification UI
├── images/             # Question images
│   ├── Q1/             # Category 1 images
│   └── Q2/             # Category 2 images
├── videos/             # Question videos
└── audio/              # Question audio files
```

## Key Technical Details

### Element Creation Helper

```javascript
el(tag, attrs={}, ...children)
```
Creates DOM elements programmatically. Handles `class`, `for`, `dataset`, and other attributes.

### Question Rendering

Each question type has custom rendering logic in `renderQuestion(q)`:
- `text`, `textarea`, `select`: Standard form inputs
- `radio`, `checkbox`: Choice lists with 2-column grid layout
- `rating`: Horizontal scale with labeled options
- `video`, `image`, `audio`: Multimedia content with choice lists below

### Navigation

- `nextStep()`: Validates current question, saves data, advances to next question with slide animation
- `prevStep()`: Goes back to previous question with slide animation
- `submitChallenge()`: Final submission, calculates stats, shows results, downloads JSON
- Auto-progression: Automatically advances after instant feedback (except last question)

### Data Export

On submission, downloads JSON file with:
- `submittedAt`: ISO timestamp
- `userStats`: Final points, level, streak, achievements
- `answers`: All user responses by question ID

### Styling System

- CSS custom properties for theming (primary colors, shadows, animations)
- Gamification colors: gold, silver, bronze, success, warning, danger
- Animation variables: `--bounce`, `--smooth` easing functions
- RTL-aware layout with Arabic typography (Tajawal font)

## Development Workflow

### Running Locally

This is a static website. Simply open `index.html` in a browser or use any local server:

```bash
# Python
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# VS Code Live Server extension
# Right-click index.html > "Open with Live Server"
```

### Testing Changes

1. Modify `challengeCategories` array in `app.js` to add/edit questions
2. Update styles in `styles.css` for UI changes
3. Test all question types: text, radio, checkbox, rating, video, image, audio
4. Verify RTL layout and Arabic text rendering
5. Test auto-progression and instant feedback system
6. Check mobile responsiveness (breakpoint at 768px)

### Adding New Questions

Add to the `challengeCategories` array:

```javascript
{
  id: "unique_id",
  type: "radio", // or text, checkbox, rating, video, image, audio
  label: "السؤال بالعربي",
  required: true,
  options: [
    {value: "val1", label: "خيار 1"},
    {value: "val2", label: "خيار 2"}
  ],
  correctAnswer: "val1", // For instant feedback
  points: 15,
  feedbackImage: "images/feedback.jpg" // Optional, for image questions
}
```

### Animation Classes

- `.slide-out-left`, `.slide-out-right`: Exit animations
- `.slide-in-left`, `.slide-in-right`: Entry animations
- `.fade`: Category header fade transition
- `.instant-feedback-overlay`: Full-screen feedback overlay
- `.correct-answer`, `.wrong-answer`: Answer highlighting

## Important Patterns

1. **All form data is saved immediately**: `saveCurrentQuestionData()` called before navigation
2. **Single question per step**: Each render shows one question, not a category
3. **Global question index**: `currentQuestion` tracks position across all categories
4. **Instant validation**: Form validation happens on every input change
5. **Client-side only**: No backend, everything runs in browser
6. **Data persistence**: Answers stored in memory, exported as JSON on submission
7. **Auto-progression**: After instant feedback, automatically moves to next question (except last)

## Notes

- This is a prototype/demo application without backend integration
- Authentication forms are UI-only (no actual authentication)
- Results are only downloaded as JSON, not sent to a server
- All text content is in Arabic with RTL layout
- Designed for both desktop and mobile (responsive at 768px)
