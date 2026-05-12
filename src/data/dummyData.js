export const projects = [
  {
    id: 1,
    name: "Web Development Platform",
    description: "Building a comprehensive web development platform with real-time collaboration features and integrated deployment pipeline",
    status: "Active",
    progress: 68,
    startDate: "2026-01-15",
    endDate: "2026-08-30",
    teamMembers: [1, 2, 3, 4, 5],
    deadline: "2026-08-30"
  },
  {
    id: 2,
    name: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring",
    status: "Active",
    progress: 82,
    startDate: "2025-11-01",
    endDate: "2026-06-15",
    teamMembers: [2, 6, 7, 8],
    deadline: "2026-06-15"
  },
  {
    id: 3,
    name: "Cloud Infrastructure Migration",
    description: "Migrating legacy systems to cloud infrastructure with zero downtime and enhanced security protocols",
    status: "Active",
    progress: 45,
    startDate: "2026-02-01",
    endDate: "2026-10-31",
    teamMembers: [3, 9, 10],
    deadline: "2026-10-31"
  },
  {
    id: 4,
    name: "E-commerce Marketplace",
    description: "Multi-vendor e-commerce platform with AI-powered recommendations and integrated payment gateway",
    status: "Active",
    progress: 91,
    startDate: "2025-09-15",
    endDate: "2026-05-20",
    teamMembers: [1, 4, 6, 11],
    deadline: "2026-05-20"
  },
  {
    id: 5,
    name: "Data Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets and automated reporting capabilities",
    status: "On Hold",
    progress: 34,
    startDate: "2026-03-01",
    endDate: "2026-09-30",
    teamMembers: [5, 7, 12],
    deadline: "2026-09-30"
  },
  {
    id: 6,
    name: "Customer Support Portal",
    description: "Integrated customer support system with ticketing, live chat, and knowledge base management",
    status: "Completed",
    progress: 100,
    startDate: "2025-08-01",
    endDate: "2026-02-28",
    teamMembers: [2, 8, 9],
    deadline: "2026-02-28"
  },
  {
    id: 7,
    name: "IoT Device Management",
    description: "Centralized platform for managing and monitoring IoT devices with real-time telemetry data",
    status: "Active",
    progress: 57,
    startDate: "2026-01-20",
    endDate: "2026-07-15",
    teamMembers: [3, 10, 11, 12],
    deadline: "2026-07-15"
  },
  {
    id: 8,
    name: "HR Management System",
    description: "Comprehensive HR platform with employee onboarding, performance tracking, and payroll integration",
    status: "Active",
    progress: 73,
    startDate: "2025-12-01",
    endDate: "2026-06-30",
    teamMembers: [1, 6, 8],
    deadline: "2026-06-30"
  }
];

export const tasks = [
  {
    id: 1,
    title: "Design user authentication flow",
    description: "Create wireframes and mockups for login, registration, and password recovery flows",
    assignee: 1,
    priority: "High",
    status: "Done",
    deadline: "2026-04-15",
    projectId: 1,
    comments: [
      { user: "Maya Chen", text: "Initial wireframes completed and shared with the team", timestamp: "2026-04-10 14:23" },
      { user: "Raj Patel", text: "Looks great! Added some feedback on the password recovery flow", timestamp: "2026-04-11 09:15" }
    ]
  },
  {
    id: 2,
    title: "Implement payment gateway integration",
    description: "Integrate Stripe payment processing with webhook handling for transaction events",
    assignee: 2,
    priority: "High",
    status: "In Progress",
    deadline: "2026-05-18",
    projectId: 4,
    comments: [
      { user: "Lucia Torres", text: "Stripe API integration is 70% complete", timestamp: "2026-05-10 11:42" },
      { user: "Kwame Asante", text: "Need to test webhook handling in staging environment", timestamp: "2026-05-11 16:30" }
    ]
  },
  {
    id: 3,
    title: "Database schema optimization",
    description: "Optimize database queries and add proper indexing for improved performance",
    assignee: 3,
    priority: "Medium",
    status: "Review",
    deadline: "2026-05-20",
    projectId: 3,
    comments: [
      { user: "Anika Bergström", text: "Added composite indexes on frequently queried columns", timestamp: "2026-05-12 10:15" }
    ]
  },
  {
    id: 4,
    title: "Mobile app UI redesign",
    description: "Redesign mobile app interface following new brand guidelines and accessibility standards",
    assignee: 4,
    priority: "High",
    status: "In Progress",
    deadline: "2026-05-22",
    projectId: 2,
    comments: [
      { user: "Diego Morales", text: "Working on the new color palette and typography system", timestamp: "2026-05-09 13:20" },
      { user: "Yuki Tanaka", text: "Please ensure WCAG AA compliance for all color combinations", timestamp: "2026-05-10 08:45" }
    ]
  },
  {
    id: 5,
    title: "API documentation update",
    description: "Update API documentation with new endpoints and authentication methods",
    assignee: 5,
    priority: "Low",
    status: "To Do",
    deadline: "2026-05-25",
    projectId: 1,
    comments: []
  },
  {
    id: 6,
    title: "Security audit and penetration testing",
    description: "Conduct comprehensive security audit and fix identified vulnerabilities",
    assignee: 6,
    priority: "High",
    status: "In Progress",
    deadline: "2026-05-16",
    projectId: 2,
    comments: [
      { user: "Fatima Al-Rashid", text: "Completed initial vulnerability scan, found 3 medium-severity issues", timestamp: "2026-05-11 15:30" },
      { user: "Chen Wei", text: "Working on fixing the SQL injection vulnerability in the search module", timestamp: "2026-05-12 09:00" }
    ]
  },
  {
    id: 7,
    title: "Load testing and performance optimization",
    description: "Run load tests to identify bottlenecks and optimize system performance",
    assignee: 7,
    priority: "Medium",
    status: "To Do",
    deadline: "2026-05-28",
    projectId: 3,
    comments: []
  },
  {
    id: 8,
    title: "Customer feedback analysis",
    description: "Analyze customer feedback from the last quarter and prioritize feature requests",
    assignee: 8,
    priority: "Medium",
    status: "Done",
    deadline: "2026-04-30",
    projectId: 6,
    comments: [
      { user: "Priya Sharma", text: "Compiled feedback from 247 customers, top 3 requests identified", timestamp: "2026-04-28 14:15" }
    ]
  },
  {
    id: 9,
    title: "Implement real-time notifications",
    description: "Add WebSocket-based real-time notifications for user activities and system events",
    assignee: 9,
    priority: "High",
    status: "In Progress",
    deadline: "2026-05-19",
    projectId: 1,
    comments: [
      { user: "Omar Hassan", text: "WebSocket server setup complete, working on client-side integration", timestamp: "2026-05-11 12:00" }
    ]
  },
  {
    id: 10,
    title: "Data backup and recovery procedures",
    description: "Establish automated backup procedures and test disaster recovery protocols",
    assignee: 10,
    priority: "High",
    status: "Review",
    deadline: "2026-05-17",
    projectId: 3,
    comments: [
      { user: "Sofia Kowalski", text: "Automated daily backups configured, testing recovery process", timestamp: "2026-05-12 16:45" }
    ]
  },
  {
    id: 11,
    title: "Implement multi-language support",
    description: "Add internationalization support for English, Spanish, French, and German",
    assignee: 11,
    priority: "Medium",
    status: "To Do",
    deadline: "2026-06-05",
    projectId: 4,
    comments: []
  },
  {
    id: 12,
    title: "Analytics dashboard development",
    description: "Build interactive analytics dashboard with customizable charts and export functionality",
    assignee: 12,
    priority: "Medium",
    status: "In Progress",
    deadline: "2026-05-30",
    projectId: 5,
    comments: [
      { user: "Liam O'Brien", text: "Chart library integration complete, working on data aggregation logic", timestamp: "2026-05-10 10:30" }
    ]
  },
  {
    id: 13,
    title: "Email notification templates",
    description: "Design and implement responsive email templates for all notification types",
    assignee: 1,
    priority: "Low",
    status: "Done",
    deadline: "2026-05-05",
    projectId: 6,
    comments: [
      { user: "Maya Chen", text: "All 8 email templates designed and tested across major email clients", timestamp: "2026-05-04 15:20" }
    ]
  },
  {
    id: 14,
    title: "IoT device firmware update",
    description: "Develop and deploy firmware update for IoT devices with new security patches",
    assignee: 3,
    priority: "High",
    status: "In Progress",
    deadline: "2026-05-21",
    projectId: 7,
    comments: [
      { user: "Anika Bergström", text: "Firmware build complete, testing OTA update mechanism", timestamp: "2026-05-11 14:00" }
    ]
  },
  {
    id: 15,
    title: "User onboarding flow optimization",
    description: "Improve user onboarding experience based on analytics and user feedback",
    assignee: 4,
    priority: "Medium",
    status: "Review",
    deadline: "2026-05-23",
    projectId: 8,
    comments: [
      { user: "Diego Morales", text: "Reduced onboarding steps from 7 to 4, A/B testing in progress", timestamp: "2026-05-12 11:15" }
    ]
  },
  {
    id: 16,
    title: "Third-party API integration",
    description: "Integrate with external CRM and marketing automation platforms",
    assignee: 5,
    priority: "Medium",
    status: "To Do",
    deadline: "2026-06-10",
    projectId: 1,
    comments: []
  },
  {
    id: 17,
    title: "Automated testing suite expansion",
    description: "Expand test coverage to 85% with unit, integration, and E2E tests",
    assignee: 6,
    priority: "Medium",
    status: "In Progress",
    deadline: "2026-05-27",
    projectId: 2,
    comments: [
      { user: "Fatima Al-Rashid", text: "Current coverage at 72%, adding tests for payment module", timestamp: "2026-05-11 09:30" }
    ]
  },
  {
    id: 18,
    title: "Cloud cost optimization",
    description: "Analyze and optimize cloud infrastructure costs without impacting performance",
    assignee: 7,
    priority: "Low",
    status: "To Do",
    deadline: "2026-06-15",
    projectId: 3,
    comments: []
  },
  {
    id: 19,
    title: "Mobile app push notifications",
    description: "Implement push notification system for iOS and Android apps",
    assignee: 8,
    priority: "High",
    status: "In Progress",
    deadline: "2026-05-24",
    projectId: 2,
    comments: [
      { user: "Priya Sharma", text: "FCM integration complete for Android, working on APNs for iOS", timestamp: "2026-05-12 13:45" }
    ]
  },
  {
    id: 20,
    title: "Compliance documentation",
    description: "Prepare GDPR and CCPA compliance documentation and privacy policy updates",
    assignee: 9,
    priority: "High",
    status: "Review",
    deadline: "2026-05-15",
    projectId: 8,
    comments: [
      { user: "Omar Hassan", text: "Documentation draft complete, awaiting legal review", timestamp: "2026-05-13 10:00" }
    ]
  },
  {
    id: 21,
    title: "Search functionality enhancement",
    description: "Implement full-text search with filters and advanced query capabilities",
    assignee: 10,
    priority: "Medium",
    status: "To Do",
    deadline: "2026-06-08",
    projectId: 4,
    comments: []
  },
  {
    id: 22,
    title: "Monitoring and alerting setup",
    description: "Configure comprehensive monitoring and alerting for all critical systems",
    assignee: 11,
    priority: "High",
    status: "In Progress",
    deadline: "2026-05-20",
    projectId: 7,
    comments: [
      { user: "Amara Okafor", text: "Prometheus and Grafana setup complete, configuring alert rules", timestamp: "2026-05-12 15:30" }
    ]
  },
  {
    id: 23,
    title: "User role and permissions system",
    description: "Implement granular role-based access control with custom permission sets",
    assignee: 12,
    priority: "High",
    status: "Done",
    deadline: "2026-05-10",
    projectId: 8,
    comments: [
      { user: "Liam O'Brien", text: "RBAC system implemented with 5 default roles and custom permissions", timestamp: "2026-05-09 16:00" }
    ]
  },
  {
    id: 24,
    title: "API rate limiting implementation",
    description: "Add rate limiting to prevent API abuse and ensure fair usage",
    assignee: 2,
    priority: "Medium",
    status: "Review",
    deadline: "2026-05-26",
    projectId: 1,
    comments: [
      { user: "Lucia Torres", text: "Implemented token bucket algorithm with configurable limits per endpoint", timestamp: "2026-05-12 14:20" }
    ]
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Maya Chen",
    email: "maya.chen@projekita.com",
    role: "Admin",
    avatar: "MC",
    activeTasksCount: 3,
    completionRate: 94,
    status: "online"
  },
  {
    id: 2,
    name: "Lucia Torres",
    email: "lucia.torres@projekita.com",
    role: "Project Manager",
    avatar: "LT",
    activeTasksCount: 2,
    completionRate: 88,
    status: "online"
  },
  {
    id: 3,
    name: "Anika Bergström",
    email: "anika.bergstrom@projekita.com",
    role: "Anggota Tim",
    avatar: "AB",
    activeTasksCount: 2,
    completionRate: 91,
    status: "offline"
  },
  {
    id: 4,
    name: "Diego Morales",
    email: "diego.morales@projekita.com",
    role: "Anggota Tim",
    avatar: "DM",
    activeTasksCount: 2,
    completionRate: 86,
    status: "online"
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    email: "yuki.tanaka@projekita.com",
    role: "Anggota Tim",
    avatar: "YT",
    activeTasksCount: 2,
    completionRate: 79,
    status: "offline"
  },
  {
    id: 6,
    name: "Fatima Al-Rashid",
    email: "fatima.alrashid@projekita.com",
    role: "Project Manager",
    avatar: "FA",
    activeTasksCount: 2,
    completionRate: 92,
    status: "online"
  },
  {
    id: 7,
    name: "Chen Wei",
    email: "chen.wei@projekita.com",
    role: "Anggota Tim",
    avatar: "CW",
    activeTasksCount: 1,
    completionRate: 83,
    status: "online"
  },
  {
    id: 8,
    name: "Priya Sharma",
    email: "priya.sharma@projekita.com",
    role: "Anggota Tim",
    avatar: "PS",
    activeTasksCount: 2,
    completionRate: 95,
    status: "offline"
  },
  {
    id: 9,
    name: "Omar Hassan",
    email: "omar.hassan@projekita.com",
    role: "Anggota Tim",
    avatar: "OH",
    activeTasksCount: 2,
    completionRate: 87,
    status: "online"
  },
  {
    id: 10,
    name: "Sofia Kowalski",
    email: "sofia.kowalski@projekita.com",
    role: "Anggota Tim",
    avatar: "SK",
    activeTasksCount: 1,
    completionRate: 90,
    status: "online"
  },
  {
    id: 11,
    name: "Amara Okafor",
    email: "amara.okafor@projekita.com",
    role: "Anggota Tim",
    avatar: "AO",
    activeTasksCount: 1,
    completionRate: 84,
    status: "offline"
  },
  {
    id: 12,
    name: "Liam O'Brien",
    email: "liam.obrien@projekita.com",
    role: "Anggota Tim",
    avatar: "LO",
    activeTasksCount: 2,
    completionRate: 89,
    status: "online"
  }
];

export const risks = [
  {
    id: 1,
    description: "Third-party API dependency may cause service disruptions if provider experiences downtime",
    level: "High",
    probability: 45,
    impact: 75,
    status: "Open",
    mitigationStrategy: "Implement fallback mechanisms and caching layer to reduce dependency on external services",
    projectId: 1
  },
  {
    id: 2,
    description: "Database migration could result in data loss or corruption during the transition period",
    level: "Critical",
    probability: 30,
    impact: 90,
    status: "Mitigated",
    mitigationStrategy: "Comprehensive backup strategy with point-in-time recovery and staged migration approach",
    projectId: 3
  },
  {
    id: 3,
    description: "Key team member departure may delay project timeline and impact knowledge transfer",
    level: "Medium",
    probability: 25,
    impact: 60,
    status: "Open",
    mitigationStrategy: "Cross-training team members and maintaining detailed documentation of critical processes",
    projectId: 2
  },
  {
    id: 4,
    description: "Security vulnerability in authentication system could expose user credentials",
    level: "Critical",
    probability: 15,
    impact: 95,
    status: "Mitigated",
    mitigationStrategy: "Implemented multi-factor authentication and regular security audits with penetration testing",
    projectId: 2
  },
  {
    id: 5,
    description: "Cloud infrastructure costs may exceed budget due to unexpected traffic spikes",
    level: "Medium",
    probability: 55,
    impact: 50,
    status: "Open",
    mitigationStrategy: "Auto-scaling policies with cost alerts and traffic prediction models",
    projectId: 3
  },
  {
    id: 6,
    description: "Regulatory compliance changes may require significant system modifications",
    level: "High",
    probability: 40,
    impact: 70,
    status: "Open",
    mitigationStrategy: "Regular compliance reviews and modular architecture to facilitate quick adaptations",
    projectId: 8
  },
  {
    id: 7,
    description: "IoT device firmware bugs could affect thousands of deployed devices simultaneously",
    level: "High",
    probability: 35,
    impact: 80,
    status: "Mitigated",
    mitigationStrategy: "Staged rollout process with remote rollback capability and extensive testing protocols",
    projectId: 7
  }
];

export const activities = [
  {
    id: 1,
    type: "task_created",
    user: "Maya Chen",
    description: "created task 'Design user authentication flow'",
    timestamp: "2026-05-12 09:15",
    relatedId: 1
  },
  {
    id: 2,
    type: "task_updated",
    user: "Lucia Torres",
    description: "updated task 'Implement payment gateway integration' to In Progress",
    timestamp: "2026-05-12 10:30",
    relatedId: 2
  },
  {
    id: 3,
    type: "risk_created",
    user: "Fatima Al-Rashid",
    description: "identified new risk: Security vulnerability in authentication system",
    timestamp: "2026-05-12 11:45",
    relatedId: 4
  },
  {
    id: 4,
    type: "task_completed",
    user: "Priya Sharma",
    description: "completed task 'Customer feedback analysis'",
    timestamp: "2026-05-12 13:20",
    relatedId: 8
  },
  {
    id: 5,
    type: "project_updated",
    user: "Diego Morales",
    description: "updated project 'Mobile Banking App' progress to 82%",
    timestamp: "2026-05-12 14:05",
    relatedId: 2
  },
  {
    id: 6,
    type: "task_assigned",
    user: "Anika Bergström",
    description: "assigned task 'Database schema optimization' to Chen Wei",
    timestamp: "2026-05-12 15:30",
    relatedId: 3
  },
  {
    id: 7,
    type: "risk_mitigated",
    user: "Omar Hassan",
    description: "mitigated risk: Database migration data loss",
    timestamp: "2026-05-11 16:45",
    relatedId: 2
  },
  {
    id: 8,
    type: "task_commented",
    user: "Yuki Tanaka",
    description: "commented on task 'Mobile app UI redesign'",
    timestamp: "2026-05-11 08:20",
    relatedId: 4
  },
  {
    id: 9,
    type: "project_created",
    user: "Maya Chen",
    description: "created new project 'IoT Device Management'",
    timestamp: "2026-05-10 10:00",
    relatedId: 7
  },
  {
    id: 10,
    type: "task_updated",
    user: "Sofia Kowalski",
    description: "moved task 'Data backup and recovery procedures' to Review",
    timestamp: "2026-05-10 12:30",
    relatedId: 10
  },
  {
    id: 11,
    type: "team_joined",
    user: "Liam O'Brien",
    description: "joined project 'Data Analytics Dashboard'",
    timestamp: "2026-05-09 14:15",
    relatedId: 5
  },
  {
    id: 12,
    type: "task_created",
    user: "Fatima Al-Rashid",
    description: "created task 'Security audit and penetration testing'",
    timestamp: "2026-05-09 09:45",
    relatedId: 6
  },
  {
    id: 13,
    type: "risk_updated",
    user: "Amara Okafor",
    description: "updated risk probability for 'Cloud infrastructure costs'",
    timestamp: "2026-05-08 16:00",
    relatedId: 5
  },
  {
    id: 14,
    type: "task_completed",
    user: "Liam O'Brien",
    description: "completed task 'User role and permissions system'",
    timestamp: "2026-05-08 11:30",
    relatedId: 23
  },
  {
    id: 15,
    type: "project_milestone",
    user: "Lucia Torres",
    description: "reached milestone: E-commerce Marketplace Beta Launch",
    timestamp: "2026-05-07 15:20",
    relatedId: 4
  }
];

export const notifications = [
  {
    id: 1,
    type: "deadline",
    title: "Task deadline approaching",
    message: "Task 'Compliance documentation' is due in 3 days",
    timestamp: "2026-05-12 08:00",
    read: false,
    actionUrl: "/tasks/20"
  },
  {
    id: 2,
    type: "risk",
    title: "New risk identified",
    message: "Critical risk added to Mobile Banking App project",
    timestamp: "2026-05-12 11:45",
    read: false,
    actionUrl: "/risks/4"
  },
  {
    id: 3,
    type: "task",
    title: "Task assigned to you",
    message: "You have been assigned to 'API rate limiting implementation'",
    timestamp: "2026-05-11 14:30",
    read: true,
    actionUrl: "/tasks/24"
  },
  {
    id: 4,
    type: "comment",
    title: "New comment on your task",
    message: "Yuki Tanaka commented on 'Mobile app UI redesign'",
    timestamp: "2026-05-11 08:20",
    read: true,
    actionUrl: "/tasks/4"
  },
  {
    id: 5,
    type: "deadline",
    title: "Task overdue",
    message: "Task 'Security audit and penetration testing' is overdue",
    timestamp: "2026-05-10 09:00",
    read: false,
    actionUrl: "/tasks/6"
  },
  {
    id: 6,
    type: "project",
    title: "Project status updated",
    message: "E-commerce Marketplace progress updated to 91%",
    timestamp: "2026-05-09 16:15",
    read: true,
    actionUrl: "/projects/4"
  },
  {
    id: 7,
    type: "team",
    title: "New team member added",
    message: "Liam O'Brien joined Data Analytics Dashboard project",
    timestamp: "2026-05-09 14:15",
    read: true,
    actionUrl: "/team/12"
  },
  {
    id: 8,
    type: "milestone",
    title: "Milestone achieved",
    message: "E-commerce Marketplace reached Beta Launch milestone",
    timestamp: "2026-05-07 15:20",
    read: true,
    actionUrl: "/projects/4"
  },
  {
    id: 9,
    type: "risk",
    title: "Risk status changed",
    message: "Database migration risk has been mitigated",
    timestamp: "2026-05-06 10:30",
    read: true,
    actionUrl: "/risks/2"
  },
  {
    id: 10,
    type: "task",
    title: "Task completed",
    message: "User role and permissions system has been completed",
    timestamp: "2026-05-05 11:30",
    read: true,
    actionUrl: "/tasks/23"
  }
];

export const progressChartData = [
  { week: "Week 1", project1: 12, project2: 18, project3: 8, project4: 22, project5: 5, project6: 45, project7: 10, project8: 15 },
  { week: "Week 2", project1: 18, project2: 25, project3: 12, project4: 31, project5: 8, project6: 58, project7: 15, project8: 22 },
  { week: "Week 3", project1: 24, project2: 34, project3: 16, project4: 42, project5: 11, project6: 68, project7: 20, project8: 29 },
  { week: "Week 4", project1: 31, project2: 43, project3: 20, project4: 53, project5: 14, project6: 76, project7: 25, project8: 36 },
  { week: "Week 5", project1: 38, project2: 52, project3: 24, project4: 62, project5: 17, project6: 84, project7: 30, project8: 43 },
  { week: "Week 6", project1: 45, project2: 61, project3: 28, project4: 71, project5: 20, project6: 91, project7: 35, project8: 50 },
  { week: "Week 7", project1: 52, project2: 68, project3: 32, project4: 78, project5: 23, project6: 96, project7: 40, project8: 57 },
  { week: "Week 8", project1: 58, project2: 74, project3: 36, project4: 84, project5: 26, project6: 100, project7: 45, project8: 64 },
  { week: "Week 9", project1: 63, project2: 79, project3: 40, project4: 88, project5: 29, project6: 100, project7: 50, project8: 69 },
  { week: "Week 10", project1: 66, project2: 81, project3: 43, project4: 90, project5: 31, project6: 100, project7: 54, project8: 72 },
  { week: "Week 11", project1: 68, project2: 82, project3: 45, project4: 91, project5: 34, project6: 100, project7: 57, project8: 73 },
  { week: "Week 12", project1: 68, project2: 82, project3: 45, project4: 91, project5: 34, project6: 100, project7: 57, project8: 73 }
];

export const taskStatusData = [
  { name: "To Do", value: 20, fill: "hsl(var(--muted))" },
  { name: "In Progress", value: 35, fill: "hsl(var(--primary))" },
  { name: "Review", value: 15, fill: "hsl(var(--warning))" },
  { name: "Done", value: 30, fill: "hsl(var(--accent))" }
];

export const teamCompletionData = [
  { name: "Maya Chen", completion: 94 },
  { name: "Priya Sharma", completion: 95 },
  { name: "Fatima Al-Rashid", completion: 92 },
  { name: "Anika Bergström", completion: 91 },
  { name: "Sofia Kowalski", completion: 90 },
  { name: "Liam O'Brien", completion: 89 },
  { name: "Lucia Torres", completion: 88 },
  { name: "Omar Hassan", completion: 87 },
  { name: "Diego Morales", completion: 86 },
  { name: "Amara Okafor", completion: 84 },
  { name: "Chen Wei", completion: 83 },
  { name: "Yuki Tanaka", completion: 79 }
];