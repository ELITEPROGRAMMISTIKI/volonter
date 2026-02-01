import { supabase } from '../../../lib/supabase'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body

    // Валидация
    if (!email || !password) {
      return res.status(400).json({ error: 'Email и пароль обязательны' })
    }

    // Ищем пользователя
    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, name, role, password_hash')
      .eq('email', email)
      .single()

    if (error || !user) {
      return res.status(401).json({ error: 'Неверный email или пароль' })
    }

    // Проверяем пароль
    const isValidPassword = await bcrypt.compare(password, user.password_hash)
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Неверный email или пароль' })
    }

    // Создаем сессию (простой вариант для начала)
    // В реальном проекте здесь будет JWT или сессии Supabase
    const userSession = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }

    res.status(200).json({ 
      message: 'Вход успешен',
      user: userSession
    })

  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Внутренняя ошибка сервера' })
  }
}
