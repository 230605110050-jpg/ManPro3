import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Filter, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import TeamMemberAvatar from '@/components/TeamMemberAvatar.jsx';
import EmptyState from '@/components/EmptyState.jsx';
import { teamMembers, tasks } from '@/data/dummyData.js';

const TimPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getMemberTasks = (memberId) => {
    return tasks.filter(task => task.assignee === memberId);
  };

  return (
    <>
      <Helmet>
<title>Tim - ManPro3</title>
        <meta name="description" content="Manage team members and track their performance" />
      </Helmet>

      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tim</h1>
            <p className="text-muted-foreground">Manage team members and performance</p>
          </div>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Project Manager">Project Manager</SelectItem>
              <SelectItem value="Anggota Tim">Anggota Tim</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-200"
                  onClick={() => setSelectedMember(member)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <TeamMemberAvatar member={member} size="lg" showTooltip={false} />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{member.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">{member.email}</p>
                        <Badge className="mt-2" variant="secondary">{member.role}</Badge>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        member.status === 'online' ? 'bg-accent' : 'bg-muted-foreground'
                      }`} />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Active Tasks</p>
                        <p className="text-2xl font-bold">{member.activeTasksCount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Completion</p>
                        <p className="text-2xl font-bold">{member.completionRate}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Search}
            title="No team members found"
            description="Try adjusting your search or filter criteria"
          />
        )}

        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <TeamMemberAvatar member={selectedMember} size="lg" showTooltip={false} />
                <div>
                  <div>{selectedMember?.name}</div>
                  <div className="text-sm font-normal text-muted-foreground">{selectedMember?.role}</div>
                </div>
              </DialogTitle>
            </DialogHeader>
            {selectedMember && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">{selectedMember.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Status</h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        selectedMember.status === 'online' ? 'bg-accent' : 'bg-muted-foreground'
                      }`} />
                      <span className="capitalize">{selectedMember.status}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Active Tasks</h3>
                    <p className="text-3xl font-bold">{selectedMember.activeTasksCount}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Completion Rate</h3>
                    <p className="text-3xl font-bold">{selectedMember.completionRate}%</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Assigned Tasks</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {getMemberTasks(selectedMember.id).map(task => (
                      <div key={task.id} className="p-3 rounded-lg bg-muted">
                        <p className="font-medium text-sm">{task.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{task.status}</Badge>
                          <Badge variant="secondary" className="text-xs">{task.priority}</Badge>
                        </div>
                      </div>
                    ))}
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

export default TimPage;