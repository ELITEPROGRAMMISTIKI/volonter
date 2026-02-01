import { supabase } from '../../../lib/supabase'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, password, name } = req.body

    // Валидация
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Все поля обязательны' })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Пароль должен быть минимум 6 символов' })
    }

    // Проверяем, что email не занят
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single()

    if (existingUser) {
      return res.status(400).json({ error: 'Email уже используется' })
    }

    // Хешируем пароль
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    // Создаем пользователя
    const { data: user, error } = await supabase
      .from('users')
      .insert([
        {
          email,
          password_hash: passwordHash,
          name,
          role: 'user',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select('id, email, name, role, created_at')
      .single()

    if (error) {
      console.error('Error creating user:', error)
      return res.status(500).json({ error: 'Ошибка при регистрации' })
    }

    res.status(201).json({ 
      message: 'Регистрация успешна',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    })

  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Внутренняя ошибка сервера' })
  }
}
