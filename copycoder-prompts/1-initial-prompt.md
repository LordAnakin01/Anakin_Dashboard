Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Employee Dashboard with Onboarding & Time Tracking Interface
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header with: Dashboard, People, Hiring, Devices, Apps, Sorry, Calendar, Reviews
- Settings, notifications, and profile icons in top right
- Left sidebar with: Pension contributions, Devices, Compensation Summary, Employee Benefits


2. Layout Components:
- Main container: 1200px max-width
- Header height: 60px
- Left sidebar: 280px width
- Content area: 3-column grid layout
- Card components: ~320px width each


3. Content Sections:
- Profile card with photo and role info
- Progress tracking chart (61.1h)
- Time tracker with circular timer (02:35)
- Onboarding progress (18% complete)
- Calendar view with scheduled events
- Task list with completion status


4. Interactive Controls:
- Play/pause button for time tracker
- Expandable sidebar sections
- Calendar event interactions
- Task completion toggles
- Navigation menu items
- Settings and notification buttons


5. Colors:
- Primary: #000000 (text)
- Secondary: #FFD700 (yellow highlights)
- Background: #F5F5F5
- Accent: #808080 (icons)
- Status colors: Green (complete), Grey (pending)


6. Grid/Layout Structure:
- 12-column grid system
- 20px standard spacing
- Card layout with 16px padding
- Responsive breakpoints at 768px, 1024px, 1440px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Sidebar
│   │   └── Dashboard
│   ├── features/
│   │   ├── TimeTracker
│   │   ├── Progress
│   │   └── Onboarding
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Real-time time tracking
- Task management system
- Calendar integration
- Progress monitoring
- Employee onboarding workflow
- Device management


3. State Management:
```typescript
interface AppState {
├── user: {
│   ├── profile: UserProfile
│   ├── preferences: UserPreferences
│   └── settings: UserSettings
├── timeTracking: {
│   ├── currentSession: Session
│   ├── weeklyProgress: Progress[]
│   └── totalHours: number
├── onboarding: {
│   ├── progress: number
│   ├── tasks: Task[]
│   └── currentStep: number
└── }
}
```


4. Routes:
```typescript
const routes = [
├── '/dashboard',
├── '/profile/*',
├── '/time-tracking/*',
├── '/onboarding/*',
└── '/settings/*'
]
```


5. Component Architecture:
- DashboardLayout (parent)
- TimeTracker (feature)
- ProgressChart (shared)
- OnboardingTasks (feature)
- CalendarView (feature)
- ProfileCard (shared)


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1440px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.