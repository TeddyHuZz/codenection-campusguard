"use client"

import { Shield, AlertTriangle, MapPin, Users, Phone, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CampusSafetyHome() {
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
              <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Safety is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Comprehensive campus safety platform with real-time reporting, safe route planning, and emergency resources
            for the university community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Emergency Report
            </Button>
            <Button size="lg" variant="outline">
              <MapPin className="mr-2 h-5 w-5" />
              Find Safe Route
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Safety Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Emergency Reporting */}
            <Card className="border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Emergency Reporting
                </CardTitle>
                <CardDescription>Anonymous incident reporting with real-time alerts to campus security</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Anonymous reporting system</li>
                  <li>• Real-time emergency alerts</li>
                  <li>• Priority-based escalation</li>
                  <li>• Case tracking and updates</li>
                </ul>
              </CardContent>
            </Card>

            {/* Safe Routes */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-primary" />
                  SafeRoute Planner
                </CardTitle>
                <CardDescription>
                  AI-powered route planning based on lighting, crowds, and incident history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Real-time safety scoring</li>
                  <li>• Crowd-sourced data</li>
                  <li>• Friend tracking feature</li>
                  <li>• Estimated arrival times</li>
                </ul>
              </CardContent>
            </Card>

            {/* Safety Buddy */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Safety Buddy System
                </CardTitle>
                <CardDescription>Connect with friends for mutual safety during late-night activities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Buddy check-in system</li>
                  <li>• Automatic notifications</li>
                  <li>• Location sharing</li>
                  <li>• Emergency contacts</li>
                </ul>
              </CardContent>
            </Card>

            {/* Campus Dashboard */}
            <Card className="border-l-4 border-l-chart-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-chart-1" />
                  Safety Dashboard
                </CardTitle>
                <CardDescription>Real-time monitoring and analytics for campus security teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Live incident heatmap</li>
                  <li>• CCTV integration</li>
                  <li>• Alert prioritization</li>
                  <li>• Response analytics</li>
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Resources */}
            <Card className="border-l-4 border-l-chart-5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-chart-5" />
                  Emergency Hub
                </CardTitle>
                <CardDescription>Centralized access to all campus safety resources and contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Emergency contacts</li>
                  <li>• Safety guides & tutorials</li>
                  <li>• First aid instructions</li>
                  <li>• Campus police info</li>
                </ul>
              </CardContent>
            </Card>

            {/* Incident Mapping */}
            <Card className="border-l-4 border-l-chart-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-chart-2" />
                  Incident Mapping
                </CardTitle>
                <CardDescription>Crowdsourced real-time incident reporting and visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Real-time incident pins</li>
                  <li>• Color-coded risk levels</li>
                  <li>• Community reporting</li>
                  <li>• Historical data overlay</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Quick Actions</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="lg"
              className="h-24 sm:h-20 flex-col gap-2 bg-transparent hover:bg-destructive/10 hover:border-destructive transition-all duration-200 touch-manipulation"
              onClick={() => (window.location.href = "/report?emergency=true")}
            >
              <AlertTriangle className="h-6 w-6 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">Report Incident</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-24 sm:h-20 flex-col gap-2 bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-200 touch-manipulation"
              onClick={() => (window.location.href = "/routes")}
            >
              <MapPin className="h-6 w-6 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">Get Safe Route</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-24 sm:h-20 flex-col gap-2 bg-transparent hover:bg-accent/10 hover:border-accent transition-all duration-200 touch-manipulation"
              onClick={() => alert("Buddy system coming soon!")}
            >
              <Users className="h-6 w-6 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">Find Buddy</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-24 sm:h-20 flex-col gap-2 bg-transparent hover:bg-chart-5/10 hover:border-chart-5 transition-all duration-200 touch-manipulation"
              onClick={() => (window.location.href = "/resources#emergency-contacts")}
            >
              <Phone className="h-6 w-6 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">Emergency Contacts</span>
            </Button>
          </div>
          <div className="mt-8 sm:hidden">
            <p className="text-sm text-muted-foreground mb-3">
              Install CampusGuard for quick access to safety features
            </p>
            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                // PWA install prompt will be handled by browser
                if ("serviceWorker" in navigator) {
                  navigator.serviceWorker.register("/sw.js")
                }
              }}
            >
              Add to Home Screen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">CampusGuard</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Making campus safer, one report at a time. Available 24/7 for the university community.
          </p>
        </div>
      </footer>
    </div>
  )
}
