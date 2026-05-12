import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LogIn, ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = 'Email wajib diisi';
    else if (!email.includes('@')) newErrors.email = 'Format email tidak valid';
    
    if (!password) newErrors.password = 'Password wajib diisi';
    if (!role) newErrors.role = 'Role wajib dipilih';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Mohon lengkapi semua field dengan benar');
      return;
    }

    setIsLoading(true);
    setErrors({});

    setTimeout(() => {
      login(email, password, role);
      toast.success('Login berhasil');
      navigate('/dashboard');
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Login - ManPro3</title>
        <meta name="description" content="Login to ManPro3 project management platform" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
        <div className="w-full max-w-md mb-6">
          <Button 
            onClick={() => navigate('/')} 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="w-full max-w-md"
        >
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">ManPro3</h1>
              <p className="text-muted-foreground">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@perusahaan.com" 
                  value={email} 
                  onChange={e => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                  }} 
                  className={`input-field ${errors.email ? 'input-error' : ''}`} 
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={e => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                  }} 
                  className={`input-field ${errors.password ? 'input-error' : ''}`} 
                />
                {errors.password && (
                  <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.password}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select 
                  value={role} 
                  onValueChange={(val) => {
                    setRole(val);
                    if (errors.role) setErrors(prev => ({ ...prev, role: '' }));
                  }}
                >
                  <SelectTrigger id="role" className={`input-field ${errors.role ? 'input-error' : ''}`}>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Project Manager">Project Manager</SelectItem>
                    <SelectItem value="Anggota Tim">Anggota Tim</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.role}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign in
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Belum punya akun?{' '}
                <Link to="/signup" className="text-primary font-medium hover:underline">
                  Daftar di sini
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;