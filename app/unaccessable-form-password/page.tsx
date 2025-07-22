'use client';

import '@/app/style/form.scss';

import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ChangePassword() {
  const router = useRouter();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleChangePassword = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setProcessing(true);

      if (!oldPassword || !newPassword) {
        toast.error('Please fill all fields');
        return;
      }

      if (oldPassword === newPassword) {
        toast.error('Old and new password cannot be same');
        return;
      }

      const response = await fetch('/api/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success('Password changed successfully');
          setOldPassword('');
          setNewPassword('');
          router.push('/unaccessable-form');
        }
      } else {
        toast.error('Password not changed');
      }
    } catch (e) {
      toast.error('Password not changed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="from__main__container">
      <div
        className="from__main__container__upper"
        style={{
          maxWidth: 500,
        }}
      >
        <form className="form__warper popup" onSubmit={handleChangePassword}>
          <div
            className="form__warper__logo"
            style={{
              marginBottom: -50,
            }}
          >
            <Image width={250} height={70} src="/secondLogo.png" alt="logo" />
          </div>
          <div
            className="form__input__warper"
            style={{
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <div
              className="input__entry"
              style={{
                width: '100%',
              }}
            >
              <div className="input__entry__label">Old Password</div>
              <input className="input__entry__label__input" type="password" placeholder="Enter old password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </div>
            <div
              className="input__entry"
              style={{
                width: '100%',
              }}
            >
              <div className="input__entry__label">New Password</div>
              <input className="input__entry__label__input" type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="form__warper__btn" disabled={processing}>
            {processing ? 'Processing...' : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
