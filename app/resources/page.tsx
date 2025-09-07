import { Shield, Phone, Heart, Book, AlertTriangle, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <Link href="/" className="text-2xl font-bold text-foreground">
                CampusGuard
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link href="/report" className="text-muted-foreground hover:text-foreground transition-colors">
                Report
              </Link>
              <Link href="/routes" className="text-muted-foreground hover:text-foreground transition-colors">
                Safe Routes
              </Link>
              <Link href="/resources" className="text-foreground font-medium">
                Resources
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Emergency Contacts Banner */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-destructive mb-4">Emergency Contacts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-2 text-destructive" />
              <p className="font-semibold">Emergency Services</p>
              <p className="text-2xl font-bold text-destructive">911</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Campus Security</p>
              <p className="text-xl font-bold">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-chart-1" />
              <p className="font-semibold">Health Services</p>
              <p className="text-xl font-bold">(555) 123-4568</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-chart-3" />
              <p className="font-semibold">Crisis Hotline</p>
              <p className="text-xl font-bold">(555) 123-4569</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Resources */}
          <div className="lg:col-span-2 space-y-8">
            {/* Safety Guides */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Safety Guides & Tutorials</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Book className="h-5 w-5" />
                      Personal Safety
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Walking safely at night</li>
                      <li>• Situational awareness tips</li>
                      <li>• Self-defense basics</li>
                      <li>• Emergency preparedness</li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="h-5 w-5" />
                      First Aid Basics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• CPR instructions</li>
                      <li>• Treating wounds</li>
                      <li>• Recognizing emergencies</li>
                      <li>• When to call for help</li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <AlertTriangle className="h-5 w-5" />
                      Emergency Procedures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Fire evacuation plans</li>
                      <li>• Severe weather protocols</li>
                      <li>• Lockdown procedures</li>
                      <li>• Medical emergencies</li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                      View Procedures
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="h-5 w-5" />
                      Bystander Intervention
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Recognizing dangerous situations</li>
                      <li>• Safe intervention techniques</li>
                      <li>• When to get help</li>
                      <li>• Supporting others</li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                      Learn Techniques
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Campus Services */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Campus Safety Services</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="h-8 w-8 text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">Campus Security Escort</h4>
                        <p className="text-muted-foreground mb-3">
                          Free walking escort service available 24/7 for students, faculty, and staff
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="secondary">24/7 Available</Badge>
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            (555) 123-4567
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-8 w-8 text-chart-2 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">Emergency Call Boxes</h4>
                        <p className="text-muted-foreground mb-3">
                          47 emergency call boxes located throughout campus for immediate assistance
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="secondary">Direct to Security</Badge>
                          <span>GPS-enabled locations</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-8 w-8 text-chart-3 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">Safety Patrols</h4>
                        <p className="text-muted-foreground mb-3">
                          Regular security patrols covering all campus areas during evening and night hours
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="secondary">6 PM - 6 AM</Badge>
                          <span>Foot & vehicle patrols</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Campus Security
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Nearest Call Box
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Request Safety Escort
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  <Heart className="mr-2 h-4 w-4" />
                  Health Services
                </Button>
              </CardContent>
            </Card>

            {/* Support Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Support Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Counseling Center</h4>
                  <p className="text-sm text-muted-foreground mb-2">Free confidential counseling services</p>
                  <p className="text-sm font-medium">(555) 123-4570</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Title IX Office</h4>
                  <p className="text-sm text-muted-foreground mb-2">Report discrimination and harassment</p>
                  <p className="text-sm font-medium">(555) 123-4571</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Student Affairs</h4>
                  <p className="text-sm text-muted-foreground mb-2">General student support and resources</p>
                  <p className="text-sm font-medium">(555) 123-4572</p>
                </div>
              </CardContent>
            </Card>

            {/* Safety Apps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safety Apps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-1">CampusGuard Mobile</h4>
                  <p className="text-xs text-muted-foreground mb-2">Download our mobile app for quick reporting</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      iOS
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      Android
                    </Button>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-1">Emergency Alert System</h4>
                  <p className="text-xs text-muted-foreground">Sign up for campus-wide emergency notifications</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
