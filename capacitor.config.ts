import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mikewootton.payslipApp',
  appName: 'payslip-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
