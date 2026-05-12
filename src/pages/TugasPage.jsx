import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Plus, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaskCard from '@/components/TaskCard.jsx';
import StatusBadge from '@/components/StatusBadge.jsx';
import PriorityBadge from '@/components/PriorityBadge.jsx';
import TeamMemberAvatar from '@/components/TeamMemberAvatar.jsx';
import EmptyState from '@/components/EmptyState.jsx';
import { tasks, teamMembers } from '@/data/dummyData.js';

const TugasPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const tasksByStatus = {
    'To Do': filteredTasks.filter(t => t.status === 'To Do'),
    'In Progress': filteredTasks.filter(t => t.status === 'In Progress'),
    'Review': filteredTasks.filter(t => t.status === 'Review'),
    'Done': filteredTasks.filter(t => t.status === 'Done')
  };

  return (
    <>
      <Helmet>
<title>Tugas - ManPro3</title>
        <meta name="description" content="Manage and track all your tasks with kanban board view" />
      </Helmet>

      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tugas</h1>
            <p className="text-muted-foreground">Manage and track all your tasks</p>
          </div>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="To Do">To Do</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Review">Review</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="kanban" className="w-full">
          <TabsList>
            <TabsTrigger value="kanban">Kanban View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          <TabsContent value="kanban" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(tasksByStatus).map(([status, statusTasks]) => (
                <div key={status} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{status}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {statusTasks.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {statusTasks.length > 0 ? (
                      statusTasks.map(task => (
                        <TaskCard 
                          key={task.id} 
                          task={task} 
                          onClick={() => setSelectedTask(task)}
                        />
                      ))
                    ) : (
                      <div className="text-center py-8 text-sm text-muted-foreground bg-muted/50 rounded-lg">
                        No tasks
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-6">
            {filteredTasks.length > 0 ? (
              <div className="space-y-3">
                {filteredTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <TaskCard task={task} onClick={() => setSelectedTask(task)} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Search}
                title="No tasks found"
                description="Try adjusting your search or filter criteria"
              />
            )}
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedTask?.title}</DialogTitle>
            </DialogHeader>
            {selectedTask && (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <StatusBadge status={selectedTask.status} />
                  <PriorityBadge priority={selectedTask.priority} />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedTask.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Assignee</h3>
                    <div className="flex items-center gap-2">
                      {teamMembers.find(m => m.id === selectedTask.assignee) && (
                        <>
                          <TeamMemberAvatar 
                            member={teamMembers.find(m => m.id === selectedTask.assignee)} 
                            size="sm"
                            showTooltip={false}
                          />
                          <span className="text-sm">
                            {teamMembers.find(m => m.id === selectedTask.assignee).name}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Deadline</h3>
                    <p className="text-muted-foreground">
                      {new Date(selectedTask.deadline).toLocaleDateString('id-ID', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Comments ({selectedTask.comments?.length || 0})
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {selectedTask.comments && selectedTask.comments.length > 0 ? (
                      selectedTask.comments.map((comment, index) => (
                        <div key={index} className="bg-muted rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <TeamMemberAvatar 
                              member={{ 
                                name: comment.user, 
                                avatar: comment.user.split(' ').map(n => n[0]).join('') 
                              }} 
                              size="sm"
                              showTooltip={false}
                            />
                            <div>
                              <p className="text-sm font-medium">{comment.user}</p>
                              <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                            </div>
                          </div>
                          <p className="text-sm">{comment.text}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">No comments yet</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default TugasPage;