'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    passengers: 1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('預訂已提交！我們會盡快與您聯繫。')
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      date: '',
      passengers: 1,
    })
  }

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>🚐 台灣旅遊包車預訂系統</h1>
        <p>專業的包車服務，讓您的台灣之旅更加舒適</p>
      </div>

      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">姓名 *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="請輸入您的姓名"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">電子郵件 *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="請輸入您的電子郵件"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">電話 *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="請輸入您的電話號碼"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="destination">目的地 *</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">請選擇目的地</option>
              <option value="taipei">台北</option>
              <option value="jiufen">九份</option>
              <option value="jiufen-shifen">九份 + 十分</option>
              <option value="taichung">台中</option>
              <option value="sun-moon-lake">日月潭</option>
              <option value="alishan">阿里山</option>
              <option value="tainan">台南</option>
              <option value="kaohsiung">高雄</option>
              <option value="kenting">墾丁</option>
              <option value="custom">自訂行程</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">出發日期 *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="passengers">乘客人數 *</label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
            >
              <option value="1">1 人</option>
              <option value="2">2 人</option>
              <option value="3">3 人</option>
              <option value="4">4 人</option>
              <option value="5">5 人</option>
              <option value="6">6 人</option>
              <option value="7">7 人</option>
              <option value="8">8 人以上</option>
            </select>
          </div>

          <button type="submit" className={styles.submitBtn}>
            提交預訂
          </button>
        </form>

        <div className={styles.info}>
          <h2>為什麼選擇我們？</h2>
          <ul>
            <li>✅ 專業駕駛，安全可靠</li>
            <li>✅ 舒適的車輛，最新型號</li>
            <li>✅ 靈活的行程安排</li>
            <li>✅ 24/7 客戶支持</li>
            <li>✅ 透明的價格，無隱藏費用</li>
            <li>✅ 多語言服務</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
