import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertCircle, Calendar, Clock, CreditCard, Heart, Home, MessageCircle, Smartphone, Zap, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function LandingPageHebrew() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">CareSync AI</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">תכונות</a></li>
              <li><a href="#whatsapp" className="text-muted-foreground hover:text-primary transition-colors">וואטסאפ</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">מחירים</a></li>
              <li><a href="#integration" className="text-muted-foreground hover:text-primary transition-colors">אינטגרציה</a></li>
            </ul>
          </nav>
          <Button>התחל עכשיו</Button>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-6">תיאום טיפול בקשישים ללא מאמץ</h1>
              <p className="text-xl text-muted-foreground mb-8">
                CareSync AI: העוזר החכם שלך לניהול תרופות, פגישות ומשימות טיפול - עכשיו זמין גם בוואטסאפ!
              </p>
              <Button size="lg" className="ml-4">התחל ניסיון חינם</Button>
              <Button size="lg" variant="outline">למד עוד</Button>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">תכונות מרכזיות</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Clock className="w-6 h-6 text-primary" />}
                title="תזכורות תרופות"
                description="לעולם לא תפספסו מנה עם מערכת המעקב והתזכורות החכמה שלנו."
              />
              <FeatureCard
                icon={<Calendar className="w-6 h-6 text-primary" />}
                title="ניהול פגישות"
                description="תכנון וניהול קל של פגישות רופא ובדיקות בריאות."
              />
              <FeatureCard
                icon={<MessageCircle className="w-6 h-6 text-primary" />}
                title="תיאום מטפלים"
                description="ייעול התקשורת וחלוקת המשימות בין בני המשפחה והמטפלים."
              />
              <FeatureCard
                icon={<AlertCircle className="w-6 h-6 text-primary" />}
                title="התראות חירום"
                description="קבלת התראות מיידיות במקרה חירום או פעילות חריגה."
              />
              <FeatureCard
                icon={<Smartphone className="w-6 h-6 text-primary" />}
                title="אפליקציה לנייד"
                description="גישה ל-CareSync AI בכל מקום עם האפליקציה הידידותית שלנו."
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6 text-primary" />}
                title="תובנות מבוססות AI"
                description="קבלת המלצות טיפול מותאמות אישית על בסיס נתוני בריאות ודפוסים."
              />
              <FeatureCard
                icon={<MessageSquare className="w-6 h-6 text-primary" />}
                title="אינטגרציה עם וואטסאפ"
                description="ניהול משימות טיפול וקבלת עדכונים דרך שיחות וואטסאפ מוכרות."
              />
            </div>
          </div>
        </section>

        <section id="whatsapp" className="py-20 bg-gradient-to-b from-green-50 to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">CareSync AI בוואטסאפ</h2>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 max-w-md"
              >
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>ממשק צ'אט בוואטסאפ</CardTitle>
                    <CardDescription>ניהול משימות טיפול דרך שיחות צ'אט פשוטות</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-green-500 text-white p-2 rounded-lg">CareSync AI</div>
                      <p className="bg-gray-100 p-2 rounded-lg">בוקר טוב! הגיע הזמן לתרופת הבוקר של אבא. האם הוא כבר לקח אותה?</p>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <p className="bg-blue-500 text-white p-2 rounded-lg">כן, הרגע נתתי לו. תודה על התזכורת!</p>
                      <div className="bg-gray-300 p-2 rounded-full">את/ה</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-green-500 text-white p-2 rounded-lg">CareSync AI</div>
                      <p className="bg-gray-100 p-2 rounded-lg">מצוין! עדכנתי את יומן התרופות שלו. אל תשכח/י את הפגישה עם הרופא היום בשעה 14:00.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 max-w-md"
              >
                <h3 className="text-2xl font-semibold mb-4">למה להשתמש בוואטסאפ?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-green-500" />
                    <span>ממשק מוכר למשתמשים בכל רמות הטכנולוגיה</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-green-500" />
                    <span>עדכונים ותזכורות בזמן אמת</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                    <span>תקשורת קלה עם מטפלים ובני משפחה</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-green-500" />
                    <span>גישה ל-CareSync AI ללא צורך בהתקנת אפליקציה נוספת</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">ניהול טיפול במחיר משתלם</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>תכנית בסיסית</CardTitle>
                  <CardDescription>מושלם למשפחות בודדות</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-4">₪149<span className="text-lg font-normal">/חודש</span></p>
                  <ul className="list-disc list-inside mb-6">
                    <li>תזכורות תרופות</li>
                    <li>ניהול פגישות</li>
                    <li>תיאום מטפלים</li>
                    <li>התראות חירום בסיסיות</li>
                    <li>אינטגרציה עם וואטסאפ</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">בחר תכנית</Button>
                </CardFooter>
              </Card>
              <Card className="w-full max-w-sm border-primary">
                <CardHeader>
                  <CardTitle>תכנית מגובה ביטוח</CardTitle>
                  <CardDescription>מכוסה על ידי חברות ביטוח משתתפות</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-4">₪0<span className="text-lg font-normal">/חודש</span></p>
                  <ul className="list-disc list-inside mb-6">
                    <li>כל תכונות התכנית הבסיסית</li>
                    <li>התראות חירום משופרות</li>
                    <li>תמיכה 24/7</li>
                    <li>סקירות טיפול רבעוניות</li>
                    <li>תמיכת וואטסאפ בעדיפות</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">בדוק זכאות</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="integration" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">אינטגרציה עם בית חכם</h2>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Home className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg  font-semibold">מכשירי בית חכם</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <AlertCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">זיהוי נפילות</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">מעקב בריאות</p>
              </motion.div>
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              CareSync AI משתלב בצורה חלקה עם מכשירי IoT פופולריים לטיפול ומעקב מקיפים, עם עדכונים זמינים דרך וואטסאפ.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-primary-900 text-primary-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">CareSync AI</h3>
              <p>מעצימים משפחות לספק את הטיפול הטוב ביותר ליקיריהם, עכשיו עם אינטגרציה לוואטסאפ.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-primary-200 transition-colors">תכונות</a></li>
                <li><a href="#whatsapp" className="hover:text-primary-200 transition-colors">וואטסאפ</a></li>
                <li><a href="#pricing" className="hover:text-primary-200 transition-colors">מחירים</a></li>
                <li><a href="#integration" className="hover:text-primary-200 transition-colors">אינטגרציה</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">צור קשר</h4>
              <p>אימייל: support@caresyncai.com</p>
              <p>טלפון: 1-700-700-700</p>
              <p>וואטסאפ: 050-123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-700 text-center">
            <p>&copy; 2023 CareSync AI. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}