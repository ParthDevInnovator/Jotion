"use client"

import React from "react";
import { AlertDialog,
     AlertDialogAction,
      AlertDialogCancel, 
      AlertDialogContent, 
      AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
 } from "../ui/alert-dialog"

interface ConfirmModalProps{
    children:React.ReactNode;
    onConfrim:()=>void;
}
export const ConfirmModal =({
    children,
    onConfrim    
}:ConfirmModalProps)=>{
    const handleConfirm =(
        e:React.MouseEvent<HTMLButtonElement,MouseEvent>
    )=>{
        e.stopPropagation();
        onConfrim();
    }
  return(
    <AlertDialog>
        <AlertDialogTrigger onClick={(e)=>e.stopPropagation()} asChild>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogTitle>
                Are You absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone
            </AlertDialogDescription>
            </AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={e=>e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogHeader>
        </AlertDialog>
  )
}
