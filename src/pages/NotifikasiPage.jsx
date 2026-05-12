import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bell, CheckCheck, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import EmptyState from '@/components/EmptyState.jsx';
import { notifications } from '@/data/dummyData.js';
import { toast } from 'sonner';

const NotifikasiPage = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [notificationList, setNotificationList] = useState(notifications);

  const filteredNotifications = notificationList.filter(notification => {
    return typeFilter === 'all' || notification.type === typeFilter;
  });

  const unreadCount = notificationList.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotificationList(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
    toast.success('Notification marked as read');
  };

  const markAllAsRead = () => {
    setNotificationList(prev => prev.map(n => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const getNotificationIcon = (type) => {
    const iconClass = "h-5 w-5";
    switch (type) {
      case 'deadline':
        return <Bell className={iconClass} />;
      case 'risk':
        return <Bell className={iconClass} />;
      case 'task':
        return <Bell className={iconClass} />;
      case 'comment':
        return <Bell className={iconClass} />;
      case 'project':
        return <Bell className={iconClass} />;
      case 'team':
        return <Bell className={iconClass} />;
      case 'milestone':
        return <Bell className={iconClass} />;
      default:
        return <Bell className={iconClass} />;
    }
  };

  return (
    <>
      <Helmet>
<title>Notifikasi - ManPro3</title>
        <meta name="description" content="View and manage your notifications" />
      </Helmet>

      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifikasi</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All caught up'}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button onClick={markAllAsRead} variant="outline">
              <CheckCheck className="h-4 w-4 mr-2" />
              Mark all as read
            </Button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="deadline">Deadline</SelectItem>
              <SelectItem value="risk">Risk</SelectItem>
              <SelectItem value="task">Task</SelectItem>
              <SelectItem value="comment">Comment</SelectItem>
              <SelectItem value="project">Project</SelectItem>
              <SelectItem value="team">Team</SelectItem>
              <SelectItem value="milestone">Milestone</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Card className={`cursor-pointer hover:shadow-lg transition-all duration-200 ${
                  !notification.read ? 'border-l-4 border-l-primary' : ''
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${
                        !notification.read ? 'bg-primary/10' : 'bg-muted'
                      }`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <Badge variant="secondary" className="text-xs capitalize">
                            {notification.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                      </div>
                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Bell}
            title="No notifications found"
            description="Try adjusting your filter criteria"
          />
        )}
      </div>
    </>
  );
};

export default NotifikasiPage;