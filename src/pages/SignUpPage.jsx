import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, UserPlus, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Anggota Tim',
    terms: false
  });
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    return minLength && hasUpper && hasNumber && hasSpecial;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleRoleChange = (value) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleTermsChange = (checked) => {
    setFormData(prev => ({ ...prev, terms: checked }));
    if (errors.terms) {
      setErrors(prev => ({ ...prev, terms: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.name.length < 3) {
      newErrors.name = 'Nama lengkap minimal 3 karakter';
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password minimal 8 karakter, mengandung huruf besar, angka, dan karakter spesial';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password tidak cocok';
    }
    if (!formData.terms) {
      newErrors.terms = 'Anda harus menyetujui Terms of Service';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage as mock DB
      const users = JSON.parse(localStorage.getItem('projekita_users') || '[]');
      users.push({
        name: formData.name,
        email: formData.email,
        role: formData.role
      });
      localStorage.setItem('projekita_users', JSON.stringify(users));

      toast.success('Registrasi berhasil! Silakan login.');
      setIsLoading(false);
      navigate('/login');
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Daftar - ManPro3</title>
        <meta name="description" content="Buat akun baru di ManPro3" />
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
              <h1 className="text-3xl font-bold text-primary mb-2">Daftar Akun</h1>
              <p className="text-muted-foreground">Bergabunglah dengan ManPro3 hari ini</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@perusahaan.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  placeholder="Buat password yang kuat"
                  value={formData.password}
                  onChange={handleChange}
                  className={`input-field ${errors.password ? 'input-error' : ''}`}
                />
                {errors.password && (
                  <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3 shrink-0" /> 
                    <span className="leading-tight">{errors.password}</span>
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Ulangi password Anda"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`input-field ${errors.confirmPassword ? 'input-error' : ''}`}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select value={formData.role} onValueChange={handleRoleChange}>
                  <SelectTrigger id="role" className="input-field">
                    <SelectValue placeholder="Pilih role Anda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Project Manager">Project Manager</SelectItem>
                    <SelectItem value="Anggota Tim">Anggota Tim</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={handleTermsChange}
                  className={errors.terms ? 'border-destructive' : ''}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Saya setuju dengan Terms of Service dan Privacy Policy
                  </Label>
                  {errors.terms && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.terms}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 mt-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground"></div>
                    Mendaftar...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Daftar
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Sudah punya akun?{' '}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Login di sini
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SignUpPage;