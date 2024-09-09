import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const MainContent = () => {
  return (
    <main className="flex-1 p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <nav>
          <ol className="flex space-x-2">
            <li><a href="/" className="text-blue-500">Home</a></li>
            <li>/</li>
            <li className="text-gray-500">Dashboard</li>
          </ol>
        </nav>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" >
              <h5 className="text-lg font-bold">Appointments</h5>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200">
                  <i className="fa fa-heartbeat text-2xl"></i>
                </div>
                <div className="ml-3">
                  <h6>Appointments</h6>
                  <span className="text-green-500">Active</span>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Book Appointment</DialogTitle>
              <DialogDescription>
                Book your Appointment for your lovely Pet
              </DialogDescription>
            </DialogHeader>
            <form>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="sam"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="PedroDuarte@gmail.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+__ 000000000"
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="treatment_type" className="text-right">
                  Treatment Type
                </Label>
                <select 
                  id='treatment_type' 
                  className=' col-span-3 h-10 rounded-md border border-input bg-background flex w-full p-2'>
                <option> Default</option>
                  <option>Grooming</option>
                  <option>Medical</option>
                  <option>Vaccination</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="hospital" className="text-right">
                  Hospital
                </Label>
                <select 
                  id='hospital' 
                  className=' col-span-3 h-10 rounded-md border border-input bg-background flex w-full p-2'>
                <option> Default</option>
                  <option>KVM SuperSpeciality </option>
                  <option>X-Ray hospital</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="note" className="text-right">
                  Notes
                </Label>
                <textarea
                  id="note"
                  cols={40}
                  rows={3}
                  
                  className="col-span-3 rounded-md border border-input bg-background flex w-full p-2"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" >
          <h5 className="text-lg font-bold">Vaccination</h5>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200">
              <i className="fa-solid fa-syringe text-2xl"></i>
            </div>
            <div className="ml-3">
              <h6> </h6>
              <span className="text-green-500">  </span>  
            </div>
          </div>
        </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Vaccination Booking</DialogTitle>
              <DialogDescription>
                Take Vaccine to your lovely Pet
              </DialogDescription>
            </DialogHeader>
            <form>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vaccinename" className="text-right">
                  Vaccine Name
                </Label>
                <Input
                  id="vaccinename"
                  defaultValue="Feline Viral Rhinotracheitis (FVR)"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vaccinedate" className="text-right">
                  Next Vaccination Date
                </Label>
                <Input
                  id="vaccinedate"
                  type="date"
                  
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vaccinedate" className="text-right">
                 Due Date
                </Label>
                <Input
                  id="vaccineduedate"
                  type="date"
                  
                  className="col-span-3"
                />
              </div>
       
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="hospital" className="text-right">
                  Hospital
                </Label>
                <select 
                  id='hospital' 
                  className=' col-span-3 h-10 rounded-md border border-input bg-background flex w-full p-2'>
                <option> Default</option>
                  <option>KVM SuperSpeciality </option>
                  <option>X-Ray hospital</option>
                </select>
              </div>
              
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

  <Sheet>
    <SheetTrigger>
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
          <h5 className="text-lg font-bold">History</h5>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200">
              <i className="fa-solid fa-notes-medical fa-beat text-2xl"></i>
            </div>
            <div className="ml-3">
              <h6>Appointments</h6>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>
    </SheetTrigger>
    <SheetContent>
        <SheetTitle>Appointment</SheetTitle>
      <SheetHeader>

        <SheetDescription>
          halooo
        </SheetDescription>

      </SheetHeader>
    </SheetContent>
  </Sheet>

        

        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={() => window.location.href = '/book-appointment/'}>
          <h5 className="text-lg font-bold">Training</h5>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200">
              <i className="fa-solid fa-dog fa-beat text-2xl"></i>
            </div>
            <div className="ml-3">
              <h6>Appointments</h6>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={() => window.location.href = '/book-appointment/'}>
          <h5 className="text-lg font-bold">Appointments</h5>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200">
              <i className="fa fa-heartbeat text-2xl"></i>
            </div>
            <div className="ml-3">
              <h6>Appointments</h6>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={() => window.location.href = '/book-appointment/'}>
          <h5 className="text-lg font-bold">Medicine</h5>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200">
              <i className="fa-solid fa-capsules fa-flip text-2xl"></i>
            </div>
            <div className="ml-3">
              <h6>Appointments</h6>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>

      </section>

      {/* New Video Section */}
      <section className="mt-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h5 className="text-lg font-bold">Video</h5>
          <div className="flex flex-col items-center">
            <video className=" w-50 h-50 object-cover rounded-lg shadow-md" autoPlay loop muted playsInline>
              <source src="/src/assets/videoplayback (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
