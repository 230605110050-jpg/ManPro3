import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AlertTriangle, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RiskLevelBadge from '@/components/RiskLevelBadge.jsx';
import StatusBadge from '@/components/StatusBadge.jsx';
import EmptyState from '@/components/EmptyState.jsx';
import { risks } from '@/data/dummyData.js';

const RisikoPage = () => {
  const [levelFilter, setLevelFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState(null);

  const filteredRisks = risks.filter(risk => {
    const matchesLevel = levelFilter === 'all' || risk.level === levelFilter;
    const matchesStatus = statusFilter === 'all' || risk.status === statusFilter;
    return matchesLevel && matchesStatus;
  });

  const riskMatrix = [
    { probability: 'High', impact: 'High', risks: risks.filter(r => r.probability >= 50 && r.impact >= 70) },
    { probability: 'High', impact: 'Medium', risks: risks.filter(r => r.probability >= 50 && r.impact >= 40 && r.impact < 70) },
    { probability: 'Medium', impact: 'High', risks: risks.filter(r => r.probability >= 25 && r.probability < 50 && r.impact >= 70) },
    { probability: 'Medium', impact: 'Medium', risks: risks.filter(r => r.probability >= 25 && r.probability < 50 && r.impact >= 40 && r.impact < 70) },
    { probability: 'Low', impact: 'High', risks: risks.filter(r => r.probability < 25 && r.impact >= 70) },
    { probability: 'Low', impact: 'Medium', risks: risks.filter(r => r.probability < 25 && r.impact >= 40 && r.impact < 70) }
  ];

  return (
    <>
      <Helmet>
<title>Risiko - ManPro3</title>
        <meta name="description" content="Identify and manage project risks with risk matrix visualization" />
      </Helmet>

      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Risiko</h1>
            <p className="text-muted-foreground">Identify and manage project risks</p>
          </div>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Risk
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Critical">Critical</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Mitigated">Mitigated</SelectItem>
              <SelectItem value="Closed">Closed</SelectItem>
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
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Risk Matrix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {riskMatrix.map((cell, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`p-4 rounded-lg border-2 ${
                      cell.probability === 'High' && cell.impact === 'High'
                        ? 'border-destructive bg-destructive/10'
                        : cell.probability === 'High' || cell.impact === 'High'
                        ? 'border-warning bg-warning/10'
                        : 'border-accent bg-accent/10'
                    }`}
                  >
                    <div className="text-sm font-semibold mb-2">
                      {cell.probability} Probability / {cell.impact} Impact
                    </div>
                    <div className="text-2xl font-bold">{cell.risks.length}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {cell.risks.length === 1 ? 'risk' : 'risks'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {filteredRisks.length > 0 ? (
          <div className="space-y-4">
            {filteredRisks.map((risk, index) => (
              <motion.div
                key={risk.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-200"
                  onClick={() => setSelectedRisk(risk)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-muted-foreground">RISK-{risk.id}</span>
                          <RiskLevelBadge level={risk.level} />
                          <StatusBadge status={risk.status} />
                        </div>
                        <p className="font-medium mb-2">{risk.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>Probability: {risk.probability}%</span>
                          <span>Impact: {risk.impact}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={AlertTriangle}
            title="No risks found"
            description="Try adjusting your filter criteria"
          />
        )}

        <Dialog open={!!selectedRisk} onOpenChange={() => setSelectedRisk(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <span>RISK-{selectedRisk?.id}</span>
                {selectedRisk && <RiskLevelBadge level={selectedRisk.level} />}
              </DialogTitle>
            </DialogHeader>
            {selectedRisk && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedRisk.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Probability</h3>
                    <p className="text-2xl font-bold text-primary">{selectedRisk.probability}%</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Impact</h3>
                    <p className="text-2xl font-bold text-destructive">{selectedRisk.impact}%</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Status</h3>
                  <StatusBadge status={selectedRisk.status} />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Mitigation Strategy</h3>
                  <p className="text-muted-foreground">{selectedRisk.mitigationStrategy}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default RisikoPage;