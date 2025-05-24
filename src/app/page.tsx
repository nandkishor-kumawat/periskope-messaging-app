import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowDownUp,
  AtSign,
  Bell,
  ChevronDown,
  Clock,
  Download,
  Filter,
  Home,
  ImageIcon,
  Info,
  LayoutGrid,
  List,
  MessageCircle,
  MessageSquare,
  Mic,
  Phone,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings,
  Smile,
  Star,
  Users,
} from "lucide-react"
import { redirect } from "next/navigation"

export default function ChatInterface() {
  redirect('/chats')
  return (
    <div className="flex h-screen flex-col bg-white">
      {/* Top navigation bar */}
      <header className="flex h-12 items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
            <MessageCircle className="h-4 w-4" />
          </div>
          <span className="text-sm text-gray-500">chats</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Info className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs">5 / 6 phones</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <div className="flex w-16 flex-col items-center border-r bg-white py-4">
          <Button variant="ghost" size="icon" className="mb-2 h-10 w-10 rounded-full">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mb-2 h-10 w-10 rounded-full bg-green-100 text-green-600">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mb-2 h-10 w-10 rounded-full">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mb-2 h-10 w-10 rounded-full">
            <ArrowDownUp className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mb-2 h-10 w-10 rounded-full">
            <List className="h-5 w-5" />
          </Button>
          <div className="flex-1"></div>
          <Button variant="ghost" size="icon" className="mb-2 h-10 w-10 rounded-full">
            <Users className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mb-2 h-10 w-10 rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat list */}
        <div className="w-80 border-r">
          {/* Chat list header */}
          <div className="border-b p-2">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-green-600">
                <Filter className="h-3 w-3" />
                <span className="text-xs font-medium">Custom filter</span>
              </div>
              <span className="text-xs text-gray-500">Save</span>
              <div className="flex-1"></div>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input className="h-8 w-40 rounded-md pl-8 text-sm" placeholder="Search" />
              </div>
              <Button variant="outline" size="sm" className="h-8 gap-1 rounded-md border-gray-300 text-xs">
                <Filter className="h-3 w-3" />
                Filtered
                <Badge className="h-4 w-4 rounded-full bg-green-500 p-0 text-[8px]">2</Badge>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-gray-100">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat header */}
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-medium">Test El Centro</h2>
              <div className="flex-1"></div>
              <div className="flex -space-x-1">
                <Avatar className="h-5 w-5 border border-white">
                  <AvatarFallback className="text-[8px]">RA</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5 border border-white">
                  <AvatarFallback className="text-[8px]">RJ</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5 border border-white">
                  <AvatarFallback className="text-[8px]">BK</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5 border border-white">
                  <AvatarFallback className="text-[8px]">P</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5 border border-white bg-gray-200">
                  <AvatarFallback className="text-[8px]">+3</AvatarFallback>
                </Avatar>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Chat list */}
          <div className="h-[calc(100vh-12rem)] overflow-y-auto">
            {/* Chat item 1 */}
            <div className="border-b p-2 hover:bg-gray-50">
              <div className="flex gap-2">
                <Avatar className="h-10 w-10 bg-gray-200">
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Test Skope Final 5</span>
                    <Badge className="bg-orange-100 text-[10px] font-normal text-orange-600">Demo</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>Support2: This doesn{'`'}t go on Tuesday...</span>
                    <Badge className="ml-1 h-4 w-4 rounded-full bg-green-500 p-0 text-[8px] text-white">4</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>+91 99738 44008</span>
                    <span>+1</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Yesterday</div>
              </div>
            </div>

            {/* Chat item 2 */}
            <div className="border-b p-2 hover:bg-gray-50">
              <div className="flex gap-2">
                <Avatar className="h-10 w-10 bg-green-600 text-white">
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Periskope Team Chat</span>
                    <div className="flex items-center gap-1">
                      <Badge className="bg-orange-100 text-[10px] font-normal text-orange-600">Demo</Badge>
                      <Badge className="bg-green-100 text-[10px] font-normal text-green-600">internal</Badge>
                      <Badge className="h-4 w-4 rounded-full bg-gray-200 p-0 text-[8px]">+1</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>Periskope: Test message</span>
                    <Badge className="ml-1 h-4 w-4 rounded-full bg-gray-200 p-0 text-[8px]"></Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>+91 99738 44008</span>
                    <span>+3</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">28-Feb-25</div>
              </div>
            </div>

            {/* Chat item 3 */}
            <div className="border-b p-2 hover:bg-gray-50">
              <div className="flex gap-2">
                <Avatar className="h-10 w-10 bg-gray-200">
                  <AvatarFallback>+9</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">+91 99999 99999</span>
                    <div className="flex items-center gap-1">
                      <Badge className="bg-orange-100 text-[10px] font-normal text-orange-600">Demo</Badge>
                      <Badge className="bg-green-100 text-[10px] font-normal text-green-600">Signup</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>✓ Hi there, I{'`'}m Swapnika, Co-Founder of...</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>+91 92686 69999</span>
                    <span>+1</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">26-Feb-25</div>
              </div>
            </div>

            {/* More chat items would follow the same pattern */}
            {/* Chat item 4 */}
            <div className="border-b p-2 hover:bg-gray-50">
              <div className="flex gap-2">
                <Avatar className="h-10 w-10 bg-green-100">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>TD</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Test Demo17</span>
                    <div className="flex items-center gap-1">
                      <Badge className="bg-green-100 text-[10px] font-normal text-green-600">Consent</Badge>
                      <Badge className="bg-orange-100 text-[10px] font-normal text-orange-600">Demo</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>Rohosen: 123</span>
                    <Badge className="ml-1 h-4 w-4 rounded-full bg-gray-200 p-0 text-[8px]"></Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>+91 99738 44008</span>
                    <span>+1</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">25-Feb-25</div>
              </div>
            </div>

            {/* Chat item 5 */}
            <div className="border-b p-2 hover:bg-gray-50">
              <div className="flex gap-2">
                <Avatar className="h-10 w-10 bg-gray-200">
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Test El Centro</span>
                    <Badge className="bg-orange-100 text-[10px] font-normal text-orange-600">Demo</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>Roshnag: Hello, Ahmadpor!</span>
                    <Badge className="ml-1 h-4 w-4 rounded-full bg-gray-200 p-0 text-[8px]"></Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>+91 99738 44008</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">04-Feb-25</div>
              </div>
            </div>

            {/* Additional chat items would continue here */}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex flex-1 flex-col">
          {/* Chat header */}
          <div className="flex h-12 items-center justify-between border-b px-4">
            <div>
              <div className="text-sm font-medium">CVEER</div>
              <div className="text-xs text-gray-500">11:51</div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-6">
              <div className="text-xs text-gray-400 text-center mb-4">CDERT</div>
              <div className="text-xs text-gray-400 text-center">11:54</div>
            </div>

            {/* Message from Periskope */}
            <div className="mb-4 flex justify-end">
              <div className="max-w-[70%]">
                <div className="mb-1 text-right text-xs text-gray-600">Periskope</div>
                <div className="rounded-lg bg-green-100 p-2 text-sm">
                  <div className="text-right text-gray-800">hello</div>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1 text-xs text-gray-500">
                  <span>12:07</span>
                  <span className="text-green-500">✓✓</span>
                </div>
              </div>
            </div>

            <div className="mb-6 text-center text-xs text-gray-500">22-01-2025</div>

            {/* Message from Roshnag Airtel */}
            <div className="mb-4 flex">
              <Avatar className="mr-2 h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>RA</AvatarFallback>
              </Avatar>
              <div className="max-w-[70%]">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-medium text-green-600">Roshnag Airtel</span>
                  <span className="text-xs text-gray-500">+91 63646 47925</span>
                </div>
                <div className="rounded-lg bg-white p-2 text-sm shadow-sm border">
                  <div className="text-gray-800">Hello, South Euna!</div>
                </div>
                <div className="mt-1 text-xs text-gray-500">08:01</div>
              </div>
            </div>

            <div className="mb-6 text-center text-xs text-gray-500">23-01-2025</div>

            {/* Message from Hello, Livonia */}
            <div className="mb-4 flex">
              <Avatar className="mr-2 h-8 w-8 bg-green-600 text-white">
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div className="max-w-[70%]">
                <div className="rounded-lg bg-white p-2 text-sm shadow-sm border">
                  <div className="text-gray-800">Hello, Livonia!</div>
                </div>
                <div className="mt-1 text-xs text-gray-500">08:01</div>
              </div>
            </div>

            {/* Message from Periskope */}
            <div className="mb-4 flex justify-end">
              <div className="max-w-[70%]">
                <div className="mb-1 text-right text-xs text-gray-600">Periskope</div>
                <div className="rounded-lg bg-green-100 p-2 text-sm">
                  <div className="text-right text-gray-800">test el centro</div>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1 text-xs text-gray-500">
                  <span className="text-green-600">✓ chat@roshnag.dev</span>
                  <span>08:28</span>
                  <span className="text-green-500">✓✓</span>
                </div>
              </div>
            </div>

            {/* More messages would follow the same pattern */}
            {/* Message from Roshnag Airtel */}
            <div className="mb-4 flex">
              <Avatar className="mr-2 h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>RA</AvatarFallback>
              </Avatar>
              <div className="max-w-[70%]">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-medium text-green-600">Roshnag Airtel</span>
                  <span className="text-xs text-gray-500">+91 63646 47925</span>
                </div>
                <div className="rounded-lg bg-white p-2 text-sm shadow-sm border">
                  <div className="text-gray-800">CDERT</div>
                </div>
                <div className="mt-1 text-xs text-gray-500">08:49</div>
              </div>
            </div>

            {/* Message from Periskope */}
            <div className="mb-4 flex justify-end">
              <div className="max-w-[70%]">
                <div className="mb-1 text-right text-xs text-gray-600">Periskope</div>
                <div className="rounded-lg bg-green-100 p-2 text-sm">
                  <div className="text-right text-gray-800">testing</div>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1 text-xs text-gray-500">
                  <span className="text-green-600">✓ chat@roshnag.dev</span>
                  <span>08:49</span>
                  <span className="text-green-500">✓✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message input */}
          <div className="border-t p-2">
            <div className="flex items-center gap-2 mb-2">
              <Button
                variant="outline"
                size="sm"
                className="h-7 gap-1 rounded-md text-xs text-green-600 border-green-200"
              >
                <span>WhatsApp</span>
                <Badge className="h-4 w-4 rounded-full bg-green-500 p-0 text-[8px]"></Badge>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-7 gap-1 rounded-md text-xs text-yellow-600 border-yellow-200"
              >
                <span>Private Note</span>
                <Badge className="h-4 w-4 rounded-full bg-yellow-500 p-0 text-[8px]"></Badge>
              </Button>
              <div className="flex-1"></div>
              <span className="text-xs text-gray-500">+91 63646 47925</span>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Download className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 rounded-md border p-2">
              <Input
                className="flex-1 border-0 bg-transparent text-sm shadow-none focus-visible:ring-0"
                placeholder="Message..."
              />
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Smile className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <AtSign className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Clock className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <ImageIcon className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Mic className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
              <div className="flex items-center">
                <Avatar className="h-6 w-6 bg-green-600 text-white">
                  <AvatarFallback className="text-[10px]">P</AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <Button className="h-8 w-8 rounded-full bg-green-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
