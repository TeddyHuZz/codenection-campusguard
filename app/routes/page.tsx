import { Shield, MapPin, Navigation, Clock, Users, AlertTriangle, Route } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function SafeRoutesPage() {
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
              <Link href="/routes" className="text-foreground font-medium">
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Route Planner */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  SafeRoute Planner
                </CardTitle>
                <CardDescription>Find the safest walking route across campus based on real-time data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">From</Label>
                    <Input placeholder="Starting location" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">To</Label>
                    <Input placeholder="Destination" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="time">Travel Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When are you traveling?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="now">Right now</SelectItem>
                        <SelectItem value="30min">In 30 minutes</SelectItem>
                        <SelectItem value="1hour">In 1 hour</SelectItem>
                        <SelectItem value="custom">Custom time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Route Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Safety priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="safest">Safest route</SelectItem>
                        <SelectItem value="fastest">Fastest route</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Find Safe Route
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-96 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Interactive campus map will appear here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Showing safe routes, lighting, and real-time incidents
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Route Results */}
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Recommended Routes</h3>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Safest
                      </Badge>
                      <span className="font-medium">Main Campus Path</span>
                    </div>
                    <div className="text-sm text-muted-foreground">8 min walk</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Well-lit path through main quad with emergency call boxes
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Excellent lighting
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      High foot traffic
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>3 emergency phones
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-chart-3">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-chart-3/10 text-chart-3">
                        Fastest
                      </Badge>
                      <span className="font-medium">Direct Route</span>
                    </div>
                    <div className="text-sm text-muted-foreground">5 min walk</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Direct path through parking area - moderate lighting
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Moderate lighting
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Low foot traffic
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>1 emergency phone
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Safety Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campus Safety Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overall Safety Level</span>
                  <Badge className="bg-primary/10 text-primary">Good</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active Incidents</span>
                    <span className="text-muted-foreground">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Emergency Phones</span>
                    <span className="text-primary">47 Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Security Patrols</span>
                    <span className="text-primary">6 Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Friend Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Friend Watch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Share your route with friends for added safety</p>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Share Route
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  <Clock className="mr-2 h-4 w-4" />
                  Set Check-in Timer
                </Button>
              </CardContent>
            </Card>

            {/* Recent Incidents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Incidents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-medium">Broken streetlight</p>
                      <p className="text-muted-foreground">Near Library - 2h ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <MapPin className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-medium">Construction area</p>
                      <p className="text-muted-foreground">Science Building - 1d ago</p>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  View All Incidents
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
