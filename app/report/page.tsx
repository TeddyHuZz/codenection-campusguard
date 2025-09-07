import { Shield, AlertTriangle, Camera, MapPin, Clock, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ReportPage() {
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
              <Link href="/report" className="text-foreground font-medium">
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Emergency Banner */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <div>
              <h2 className="font-semibold text-destructive">Emergency Situation?</h2>
              <p className="text-sm text-muted-foreground">
                If you're in immediate danger, call 911 or campus emergency: (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Report Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Submit Safety Report
                </CardTitle>
                <CardDescription>
                  Report incidents anonymously to help keep our campus safe. All reports are confidential.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Incident Type */}
                <div className="space-y-2">
                  <Label htmlFor="incident-type">Incident Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency Situation</SelectItem>
                      <SelectItem value="suspicious">Suspicious Activity</SelectItem>
                      <SelectItem value="harassment">Harassment</SelectItem>
                      <SelectItem value="theft">Theft/Vandalism</SelectItem>
                      <SelectItem value="safety-hazard">Safety Hazard</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Building name, room number, or description" className="flex-1" />
                    <Button variant="outline" size="icon">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <Input type="time" />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea placeholder="Provide detailed information about what happened..." className="min-h-32" />
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                  <Label>Additional Information</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ongoing" />
                      <Label htmlFor="ongoing" className="text-sm">
                        This is an ongoing situation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="witnesses" />
                      <Label htmlFor="witnesses" className="text-sm">
                        There were witnesses present
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="injured" />
                      <Label htmlFor="injured" className="text-sm">
                        Someone was injured
                      </Label>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label>Attach Evidence (Optional)</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Camera className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload photos, videos, or documents</p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" defaultChecked />
                    <Label htmlFor="anonymous" className="text-sm">
                      Submit anonymously
                    </Label>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Information (Optional)</Label>
                    <Input placeholder="Email or phone number for follow-up" />
                    <p className="text-xs text-muted-foreground">Only provide if you want updates on this report</p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-destructive hover:bg-destructive/90">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Submit Report
                  </Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
              </CardContent>
            </Card>
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
                  <Clock className="mr-2 h-4 w-4" />
                  View My Reports
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Report Location Issue
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Anonymous Tip
                </Button>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safety Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-1">Trust Your Instincts</p>
                  <p className="text-muted-foreground">If something feels wrong, report it. Your safety matters.</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-1">Be Specific</p>
                  <p className="text-muted-foreground">Include as many details as possible in your report.</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-1">Follow Up</p>
                  <p className="text-muted-foreground">Check back for updates on your submitted reports.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
