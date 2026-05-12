import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import StatusBadge from '@/components/StatusBadge.jsx';
import ProgressBar from '@/components/ProgressBar.jsx';
import { projects } from '@/data/dummyData.js';

const JadwalPage = () => {
  const [selectedProject, setSelectedProject] = useState('all');

  const filteredProjects = selectedProject === 'all' 
    ? projects 
    : projects.filter(p => p.id === parseInt(selectedProject));

  const milestones = [
    { id: 1, name: 'Project Kickoff', date: '2026-01-15', status: 'Completed', projectId: 1 },
    { id: 2, name: 'Design Phase Complete', date: '2026-03-01', status: 'Completed', projectId: 1 },
    { id: 3, name: 'Development Sprint 1', date: '2026-04-15', status: 'Completed', projectId: 1 },
    { id: 4, name: 'Beta Launch', date: '2026-05-20', status: 'In Progress', projectId: 4 },
    { id: 5, name: 'Security Audit', date: '2026-05-25', status: 'Upcoming', projectId: 2 },
    { id: 6, name: 'Cloud Migration Phase 1', date: '2026-06-10', status: 'Upcoming', projectId: 3 },
    { id: 7, name: 'User Acceptance Testing', date: '2026-07-01', status: 'Upcoming', projectId: 1 }
  ];

  const getProjectDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <>
      <Helmet>
        <title>Jadwal - ProjeKita</title>
        <meta name="description" content="View project timelines and milestones in Gantt chart format" />
      </Helmet>

      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Jadwal</h1>
            <p className="text-muted-foreground">Project timelines and milestones</p>
          </div>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filter by project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              {projects.map(project => (
                <SelectItem key={project.id} value={project.id.toString()}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Project Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(project.startDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                        {' - '}
                        {new Date(project.endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                        {' '}
                        ({getProjectDuration(project.startDate, project.endDate)} days)
                      </p>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <ProgressBar progress={project.progress} />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200"
                  >
                    <div className={`p-2 rounded-lg ${
                      milestone.status === 'Completed' ? 'bg-accent/20' : 'bg-primary/20'
                    }`}>
                      <CheckCircle2 className={`h-5 w-5 ${
                        milestone.status === 'Completed' ? 'text-accent' : 'text-primary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{milestone.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(milestone.date).toLocaleDateString('id-ID', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                    <StatusBadge status={milestone.status} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default JadwalPage;