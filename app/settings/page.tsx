"use client";

import { motion } from "framer-motion";
import { User, Shield, Bell, Fingerprint, Trash2, LogOut, ArrowRight, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";
export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="ml-64 mt-16 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and privacy preferences</p>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 border rounded-2xl p-8 bg-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-3 border rounded-xl focus:border-primary focus:outline-none bg-background text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-3 border rounded-xl focus:border-primary focus:outline-none bg-background text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (555) 000-0000"
                className="w-full px-4 py-3 border rounded-xl focus:border-primary focus:outline-none bg-background text-foreground"
              />
            </div>
            <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Save Changes
            </button>
          </div>
        </motion.div>

        {/* Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 border rounded-2xl p-8 bg-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Privacy</h2>
          </div>
          <div className="space-y-4">
            <div className="border p-4 rounded-xl bg-background">
              <div className="font-semibold text-foreground mb-2">Data Encryption</div>
              <div className="text-sm text-muted-foreground">
                All your data is encrypted and stored securely in your vault. Raw data never leaves your control.
              </div>
            </div>
            <div className="border p-4 rounded-xl bg-background">
              <div className="font-semibold text-foreground mb-2">Signal Sharing</div>
              <div className="text-sm text-muted-foreground">
                Only anonymous signals are shared with brands. Your identity and raw data remain private.
              </div>
            </div>
            <button className="w-full px-6 py-3 rounded-xl border text-foreground font-semibold hover:bg-muted transition-colors flex items-center justify-between">
              <span>Privacy Policy</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 border rounded-2xl p-8 bg-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between border p-4 rounded-xl bg-background">
              <div>
                <div className="font-semibold text-foreground">Push Notifications</div>
                <div className="text-sm text-muted-foreground">Get notified about new offers and updates</div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className="text-primary"
              >
                {notifications ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
              </button>
            </div>
            <div className="flex items-center justify-between border p-4 rounded-xl bg-background">
              <div>
                <div className="font-semibold text-foreground">Email Notifications</div>
                <div className="text-sm text-muted-foreground">Receive updates via email</div>
              </div>
              <button className="text-primary">
                <ToggleRight size={32} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Biometrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 border rounded-2xl p-8 bg-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <Fingerprint className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Security</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between border p-4 rounded-xl bg-background">
              <div>
                <div className="font-semibold text-foreground">Biometric Authentication</div>
                <div className="text-sm text-muted-foreground">Use fingerprint or face ID to unlock your vault</div>
              </div>
              <button
                onClick={() => setBiometrics(!biometrics)}
                className="text-primary"
              >
                {biometrics ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
              </button>
            </div>
            <button className="w-full px-6 py-3 rounded-xl border text-foreground font-semibold hover:bg-muted transition-colors">
              Change Password
            </button>
          </div>
        </motion.div>

        {/* Delete Vault */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 border rounded-2xl p-8 bg-card border-red-300 dark:border-red-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Trash2 className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-semibold text-foreground">Danger Zone</h2>
          </div>
          <div className="space-y-4">
            <div className="border p-4 rounded-xl bg-background border-red-300 dark:border-red-700">
              <div className="font-semibold text-foreground mb-2">Delete Vault</div>
              <div className="text-sm text-muted-foreground mb-4">
                Permanently delete your vault and all associated data. This action cannot be undone.
              </div>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="px-6 py-3 rounded-xl border border-red-500 text-red-600 font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
              >
                Delete Vault
              </button>
            </div>
          </div>
        </motion.div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border rounded-2xl p-8 bg-card"
        >
          <button className="w-full px-6 py-4 rounded-xl border text-foreground font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2">
            <LogOut size={20} />
            Logout
          </button>
        </motion.div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setShowDeleteConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="rounded-2xl p-8 max-w-md w-full bg-card border border-red-300 dark:border-red-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <Trash2 className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold text-foreground">Delete Vault?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                This will permanently delete your vault and all associated data. This action cannot be undone.
                Are you sure you want to continue?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-6 py-3 rounded-xl border text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 rounded-xl border border-red-500 text-red-600 font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
                  Delete Forever
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

