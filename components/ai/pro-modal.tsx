"use client";

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/UI/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/UI/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/tabs";
import Link from "next/link";
import MelaCard from "../pricing/mela";
import GoldMelaCard from "../pricing/goldmela";

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="bg-accent rounded-lg">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
                Buy Awaj Mela
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 font-medium">
            <Tabs defaultValue="silver" className="w-full m-auto ">
              <TabsList className="grid w-full grid-cols-2 bg-card">
                <TabsTrigger className="hover:text-primary active:text-primary" value="silver">Silver</TabsTrigger>
                <TabsTrigger className="hover:text-primary" value="gold">Gold</TabsTrigger>
              </TabsList>
              <TabsContent value="silver">
                <Card>
                  <CardHeader>
                    <CardTitle>Silver Mela</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full m-auto">
                    <MelaCard />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="gold">
                <Card>
                  <CardHeader>
                    <CardTitle>Gold Mela</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full m-auto">
                    <GoldMelaCard/>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link onClick={proModal.onClose} className="text-sm text-primary" href={'/pricing/awaj-mela'}>Check pricing page 🡥</Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
