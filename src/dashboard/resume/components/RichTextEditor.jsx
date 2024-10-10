import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import {
    Editor,
    EditorProvider,
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnUnderline,
    Separator,
    Toolbar,
} from 'react-simple-wysiwyg';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../service/AIModal';
const PROMPT = 'position title: {positionTitle}, Depends on position title give me 5-7 bullet points for my experience in resume, give me result in HTML format'

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const [value, setValue] = useState(defaultValue);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    const [loading, setLoading] = useState(false)
    const GenerateSummaryFromAI = async () => {
        if (!resumeInfo.experience[index].title) {
            setLoading(true)
            toast('Please Add Position Title');
            return;
        }
        const prompt = PROMPT.replace('{positionTitle}', resumeInfo?.experience[index].title);
        const result = await AIChatSession.sendMessage(prompt);
        console.log(result.response.text());
        const resp = result.response.text()
        setValue(resp.replace('[', '').replace(']', ''))

        setLoading(false)
    }
    console.log(defaultValue)
    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summary</label>
                <Button disabled={loading} onClick={GenerateSummaryFromAI} variant="outline" size="sm" className="flex gap-2 border-primary text-primary">
                    {loading ?
                        <LoaderCircle className='animate-spin' /> :
                        <>
                            <Brain className='h-4 w-4' /> Generate from AI
                        </>
                    }</Button>
            </div>
            <EditorProvider>
                <Editor value={value} onChange={(e) => {
                    setValue(e.target.value);
                    onRichTextEditorChange(e)
                }}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditor