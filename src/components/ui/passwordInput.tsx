'use client';

import React, { useState } from 'react';

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="password">Password:</label>
      <input
        className="bg-slate-50 border-slate-300 border p-2 rounded-lg"
        id="password"
        name="password"
        placeholder="Enter your password here"
        type={showPassword ? 'text' : 'password'}
        required
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="show-password"
          onChange={(e) => setShowPassword(e.target.checked)}
        />
        <label htmlFor="show-password">Show Password</label>
      </div>
    </div>
  );
}