Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /dashboard
- /people
- /hiring
- /devices
- /apps
- /sorry
- /calendar
- /reviews
- /pension-contributions
- /compensation-summary
- /employee-benefits

Page Implementations:
/dashboard:
Core Purpose: Central hub for employee overview and quick actions
Key Components
- Activity feed
- Quick action cards
- Key metrics dashboard
- Notification center
Layout Structure
- Grid layout with 4 main sections
- Responsive cards that stack on mobile

/people:
Core Purpose: Employee directory and team management
Key Components
- Searchable employee list
- Department filters
- Employee profile cards
- Organization chart
Layout Structure
- List

/hiring:
Core Purpose: Recruitment and hiring process management
Key Components
- Job posting manager
- Candidate pipeline
- Interview scheduler
- Application tracker
Layout Structure
- Kanban board layout
- Split view for details
- Modal forms for actions

/devices:
Core Purpose: IT asset management and requests
Key Components
- Device inventory list
- Request form
- Status tracker
- Asset details viewer
Layout Structure
- Table layout with expandable rows
- Side panel for details
- Modal for requests

/apps:
Core Purpose: Company application access and management
Key Components
- App directory
- Access request system
- Usage analytics
- Favorites section
Layout Structure
- Grid of app cards
- Category filters
- Search bar header

/sorry:
Core Purpose: Error and maintenance page
Key Components
- Error message
- Contact support
- Return to safety options
Layout Structure
- Centered content
- Simple single column

/calendar:
Core Purpose: Company-wide event management
Key Components
- Month

/day views
- Event creator
- Team calendars
- Integration with meetings
Layout Structure:
- Calendar grid
- Sidebar for mini calendar
- Modal for event details

/reviews:
Core Purpose: Performance review management
Key Components
- Review cycles tracker
- Feedback forms
- Goal setting interface
- Progress indicators
Layout Structure
- Timeline view
- Split panels for details
- Form-based layouts

/pension-contributions:
Core Purpose: Pension scheme management
Key Components
- Contribution calculator
- History tracker
- Plan selector
- Document viewer
Layout Structure
- Dashboard style
- Forms and calculators
- Statement viewer

/compensation-summary:
Core Purpose: Salary and benefits overview
Key Components
- Salary breakdown
- Benefits summary
- Historical data
- Tax information
Layout Structure
- Card-based sections
- Data visualizations
- Downloadable statements

/employee-benefits:
Core Purpose: Benefits enrollment and management
Key Components
- Benefits selector
- Coverage details
- Enrollment status
- Cost calculator
Layout Structure
- Wizard-style enrollment
- Comparison tables
- Information cards

Layouts:
MainLayout:
- Applicable routes: All except /sorry
- Core components
  - Navigation sidebar
  - Header with search and profile
  - Breadcrumbs
  - Footer
- Responsive behavior
  - Collapsible sidebar on mobile
  - Sticky header
  - Fluid content area

ErrorLayout
- Applicable routes: /sorry
- Core components
  - Error message
  - Support contact
  - Navigation options
- Responsive behavior
  - Centered content
  - Full-height display

DashboardLayout
- Applicable routes: /dashboard, /calendar, /reviews
- Core components
  - Quick actions bar
  - Notifications panel
  - Widget grid
- Responsive behavior
  - Stacking cards on mobile
  - Collapsible panels
  - Priority content ordering

FormLayout
- Applicable routes: /pension-contributions, /compensation-summary, /employee-benefits
- Core components
  - Form sections
  - Progress indicator
  - Save/submit controls
- Responsive behavior
  - Single column on mobile
  - Floating action buttons
  - Responsive form fields
</page-structure-prompt>