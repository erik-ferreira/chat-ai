import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>EF</AvatarFallback>
              <AvatarImage src="https://github.com/erik-ferreira.png" />
            </Avatar>

            <p className="leading-relaxed">
              <span className="font-bold text-slate-700 block">
                Erik Ferreira
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              reiciendis, accusantium quos similique nostrum vero alias ab iusto
              ut quia expedita ipsam dignissimos non optio nulla modi ad maiores
              qui?
            </p>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>EF</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png" />
            </Avatar>

            <p className="leading-relaxed">
              <span className="font-bold text-slate-700 block">AI</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              reiciendis, accusantium quos similique nostrum vero alias ab iusto
              ut quia expedita ipsam dignissimos non optio nulla modi ad maiores
              qui?
            </p>
          </div>
        </CardContent>

        <CardFooter className="space-x-2">
          <Input placeholder="How can i help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
