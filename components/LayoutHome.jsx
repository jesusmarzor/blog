import { Section } from 'components/Section'
import { Tag } from 'components/Tag'
import { ImageLink } from 'components/ImageLink'
import {tags} from 'services/tags'

export function LayoutHome({children}){
    return(
        <div className="flex flex-col sm:flex-row">
            <div className="sm:w-4/6">
                {children}
                <div className="mb-4">
                    <Section title="Artículos por temas">
                        <div className="flex flex-wrap">
                            <Tag key="all" tag="all">Todos</Tag>
                            {
                                tags.map( tag => {
                                    return <Tag key={tag} tag={tag.toLowerCase()}>{tag}</Tag>
                                })
                            }
                        </div>
                    </Section>
                </div>
            </div>
            <aside className="sm:w-2/6">
                <Section title="Portfolio">
                    <ImageLink name="projects" href="https://jesusmarzor.vercel.app"/>
                </Section>
                <Section title="Github">
                    <ImageLink name="github" href="https://github.com/jesusmarzor/"/>
                </Section>
                <Section title="Linkedin">
                    <ImageLink name="linkedin" href="https://linkedin.com/in/jesusmarzor/"/>
                </Section>
            </aside>
        </div>
    )
}